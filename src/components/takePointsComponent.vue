/** 
 * author allen
 * 2017/8/28 
 */
<template>
  <div class="takePointsPage">
    <!-- 地图选点区域 -->
    <div class="mapArea">
      <div id="_outerDiv">  
        <div id="_imageDiv" style="z-index:0; position:absolute; top:0px; left:0px; width:1300px; height:600px;">  
          <img id="_imageObj" src="../assets/image/1.jpg"></img>  
        </div>  
      </div>
    </div>
    <!-- 选点坐标细节区域 -->
    <div id="showDetail">
      <el-form>
        <el-row>
				  <el-col :span="24">
				  	<el-form-item label="区域名称">
			          <el-select v-model="formLabelAlign.areaName" placeholder="请选择区域名称">
			            <el-option 
			                v-for="item in Allarea" 
			                :key="item.name"
			                :label="item.name" 
			                :value="item.name">
			            </el-option>
			          </el-select>
			        </el-form-item>
				  </el-col>
			  </el-row>

        <el-row>
				  <el-col :span="24">
				  	<el-form-item label="楼层名称">
			          <el-select v-model="formLabelAlign.floorName" placeholder="请选择楼层名称">
			            <el-option 
			                v-for="item in areaToAllFloor" 
			                :key="item.name"
			                :label="item.name" 
			                :value="item.name">
			            </el-option>
			          </el-select>
			        </el-form-item>
				  </el-col>
			  </el-row>

        <el-row>
				  <el-col :span="24">
				  	<el-form-item label="格子名称">
			          <el-input v-model="formLabelAlign.gridName" auto-complete="off"></el-input>
			        </el-form-item>
				  </el-col>
				</el-row>
      </el-form>

      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @select = "handleSelected">
        <el-table-column
          type="selection"
          width="55">>
        </el-table-column>
        <el-table-column
          prop="rect"
          label="坐标名称">
        </el-table-column>
        <el-table-column
          prop="x"
          label="x">
        </el-table-column>
        <el-table-column
          prop="y"
          label="y">
        </el-table-column>
      </el-table>

      <!-- 地图操作控制区域 -->
      <div id="changeBtn">
        <el-button @click="preventMove(0)">禁止移动</el-button>
        <el-button @click="allowedMove(1)">允许移动</el-button>
        <el-button @click="saveData()">保存数据</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {findAllArea} from '../service/dataProcessing'
import {obj, obj1} from '../../static/js/utils'
  export default {
    data () {
      return {
        selectedFormRow: [],
        selectedRowTotal: [],

        Allarea:[],
        areaToAllFloor:[],

        formLabelAlign: {
          areaName: '',
          floorName: '',
          gridName: ''
        },

        dragging : false,
        startTop : 0,
        startLeft : 0,  
        dragPosY : 0,  
        dragPosX : 0,
        t_startTop : 0,
        t_startLeft : 0,
        isMove : 1,
        resultX : null,
        resultY : null,
        tableData: [
          {
            rect: '左上角',
            name: 0,
            x: null,
            y: null
          },
          {
            rect: '左下角',
            name: 1,
            x: null,
            y: null
          },
          {
            rect: '右上角',
            name: 2,
            x: null,
            y: null
          },
          {
            rect: '右下角',
            name: 3,
            x: null,
            y: null
          }
        ]
      }
    },

    methods: {
      handleSelectionChange( val ) {
        if(val.length !== 0){
            this.selectedFormRow = val[0];                     
        }
      },

      handleSelected: function( selection, row ) {
        this.selectedRowTotal = selection;
        console.log(this.selectedRowTotal)
     },

      getElem(id) {
        return document.getElementById(id);
      },

      trimPX(_px) {
        if(_px==null || _px=="")  
          return 0;  
        return parseInt(_px.substr(0, _px.lastIndexOf("px"))); 
      },

      hitInRect(hitX, hitY, rcLeft, rcTop, rcWidth, rcHeight) {
        return (hitX>=rcLeft && hitX<rcLeft+rcWidth && hitY>=rcTop && hitY<rcTop+rcHeight);  
      },

      outerDiv() {
        return this.getElem("_outerDiv");  
      },

      imageDiv() {
        return this.getElem("_imageDiv");  
      },

      preventMove(val) {
        this.isMove = val;
      },

      allowedMove(val) {
        this.isMove = val;
      },

      initPage() {
        let _this = this;
        _this.outerDiv().addEventListener("mousedown", function (event) {  // start moving image  

          _this.t_startTop = _this.trimPX(_this.outerDiv().style.top);  
          _this.t_startLeft = _this.trimPX(_this.outerDiv().style.left);  

          let width = _this.trimPX(_this.imageDiv().style.width);  
          let height = _this.trimPX(_this.imageDiv().style.height);  
          
          if (_this.hitInRect(event.clientX, event.clientY, _this.t_startLeft, _this.t_startTop, width, height)) {  
              _this.dragging = true;  
              _this.dragPosX = event.clientX;  
              _this.dragPosY = event.clientY;  
              event.preventDefault(); // disable default behavior of browser  
            }  
          },  

          false  
        );  
    
        _this.outerDiv().addEventListener("mousemove", function (event) { // moving image  
            if( _this.isMove == 0 ) {
              _this.dragging = false;//不允许移动
            }else if( _this.isMove == 1 ) {
              _this.dragging = _this.dragging;
            }
            // console.log(_this.dragging)
            if (_this.dragging){  
              _this.imageDiv().style.cursor="pointer";  
        
              _this.imageDiv().style.top = parseInt(_this.startTop)+(event.clientY - _this.dragPosY) + "px";  
              _this.imageDiv().style.left = parseInt(_this.startLeft)+(event.clientX - _this.dragPosX) + "px";  
            }  
            event.preventDefault();  
          },  

          false  
        );  
    
        _this.outerDiv().addEventListener("mouseup", function (event) { // stop moving image 
            _this.dragging = false;  
            _this.imageDiv().style.cursor="default"; 

            _this.startTop = _this.trimPX(_this.imageDiv().style.top);    
            _this.startLeft = _this.trimPX(_this.imageDiv().style.left); 

            event.preventDefault(); 
        
            let oRect = _this.outerDiv().getBoundingClientRect();

            _this.resultX = event.clientX - oRect.left - _this.startLeft - 1342;
            _this.resultY = event.clientY - oRect.top - _this.startTop - 4130;

            if( _this.isMove == 0 ) {
              if( _this.selectedRowTotal.length !== 1 ) {
                _this.$notify({
                    title: '警告',
                    message: '有且只能选择一个坐标点！',
                    type: 'warning'
                });
                return false;
              }
              _this.showData(_this.resultX, _this.resultY);
            }else {
              return false;
            }   
          }, 

          false  
        );
      },

      showData(resultX, resultY) {
        let nowName = this.selectedFormRow.name;
        this.tableData[nowName].x = resultX;
        this.tableData[nowName].y = resultX;
      },

      /**
       *获取数据 
       */ 
      async initData() {
        // 获取的所有的区域信息
        let res = await findAllArea(); 
        console.log(res)
      }
    },

    mounted: function() {
      window.addEventListener("load", this.initPage, false); 
      this.initData();
    }
  }
</script>
<style>
    .takePointsPage{
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: 1px solid #000;
      box-sizing: border-box；
    }
    .mapArea{
      float: left;
    }
   /**
     * 移动框
     */
    #_outerDiv{  
      position:relative; 
      min-width:1300px;
      min-height:600px;   
      border:1px solid black;  
      overflow:hidden;  
    }
    /**
     * 按钮
     */
    #changeBtn{
      margin: 20px 0;
    }
    /**
     * 表格
     */
    #showDetail{
      float: left;
      width: 500px;
      height: 600px;
      border: 1px solid #000;
    } 
</style>

