<template>
  <div class="slide-bgc" v-bind:style="{background:bgColor}">
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
      <div class="slide-img">
        <a>
          <transition name="slide-trans">
            <img v-if="isShow" :src="slides[nowIndex].src">
          </transition>
          <transition name="slide-trans-old">
            <img v-if="!isShow" :src="slides[nowIndex].src">
          </transition>
        </a>
      </div>
      <h3>{{ slides[nowIndex].title }}</h3>
      <ul class="slide-pages">
        <li @click="goto(prevIndex)">&lt;</li>
        <li v-for="(item, index) in slides" @click="goto(index)">
          <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
        </li>
        <li @click="goto(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      bgColor: '',
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
        this.bgColor = this.slides[this.nowIndex].bgColor
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-730px);
}
.slide-bgc{
  width: 100%;
  height: 336px;
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 730px;
  /* width: 100%; */
  height: 336px;
  margin: 0 auto;
  overflow: hidden;
}
.slide-show h3 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.slide-pages {
  position: absolute;
  bottom: 25px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
