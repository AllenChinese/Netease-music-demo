# vue-es6

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

**序论：**
```
	轮播图 相信都不会陌生，很多的网站都会有，而且实现的方式也是千变万化，可以利用封装好的 UI 库 （bootstrap），

也可以原生的 JS 进行编写。但是其中，动画（transition）和定时器都是必不可少的。本文就是利用 vue 自带的 

transition 动画过渡效果加上定时器编写轮播图。
```

**效果：**

![这里写图片描述](http://img.blog.csdn.net/20170824154851023?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRE9DQUxMRU4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
<hr/>
<h3>1、功能分析。

从上面的效果图中看，有四个基本功能：

	1、自动的轮播的功能；
	2、点击左右箭头（pre、next）进行的切换；
	3、点击数字切换到对应的图片的功能。
	4、鼠标悬停、移出控制轮播图的停、启。
<hr/>
<h3>2、场景介绍、分析。

环境是 vue 组件的形式，轮播图模块是以组件的形式，内嵌在父组件中。这样的好处是轮播图功能，低耦合，复用性高，即插即用。这边我将轮播图的组件取名为 Carousel.vue，父组件为 app.vue。

![这里写图片描述](http://img.blog.csdn.net/20170824155705805?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRE9DQUxMRU4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
 <hr/>
<h3>3、源码分析。

**1、父组件 app.vue。**

```
<template>
	<div id="WBAQPage" class="WBAQPage">
		<carousel :slides="slides" :inv="invTime"></carousel>
	</div>
</template>
<script>
import carousel from '../../components/Carousel.vue'
	export default {
		data () {
			return {
				invTime: 2000,
				slides: [
					{
						src:require('../../assets/pic1.jpg'),
						title:'xxx1', 
					},
					{
						src:require('../../assets/pic2.jpg'),
						title:'xxx2'
					},
					{
						src:require('../../assets/pic3.jpg'),
						title:'xxx3'
					},
					{
						src:require('../../assets/pic4.jpg'),
						title:'xxx4'
					}
				]
			}
		},
		components: {
			carousel
		}
	}
</script>
<style scoped>
	
</style>
```

父组件中主要有三件事：

	1、import 引入子组件进行显示。
	2、将归纳轮播图属性的数组 slides 传给子组件。
	3、将轮播间隔的时间参数 invTime 传给子组件。

**2、子组件 Carousel.vue**

```
<template>
  <div class="slide-show" @mouseover="clear" @mouseout="run">
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
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
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
      }, 10)
    },
    run () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clear () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.run();
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
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
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
  bottom: 10px;
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
```

接下来，我会对上面提到的四个功能对应的方法，进行简单的分析：

**1、图片的切换（pre、next），实现轮播。**

原理：利用切换 img 中的 src 来达到图片的切换，在之前的父组件中，我们已经对四张图片的属性，进行了数组封装， 那么我们只需要不断改变数组的下标就能达到目的。如 img 中 `:src="slides[0].src"` ， 那么显示的就是第一张图片。这样我们就可以抽象出一个 nowIndex 的变量当做是当前图片的下表，这样我们只需要去控制 nowIndex 就能切换。用到的是 goto（index） 的方法。

```
goto (index) {
        this.nowIndex = index
    },
```
首先定义 nowIndex 为 0，所以初始化的时候，显示的是第一张图片。当我点击 pre 的时候，

```
prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
```
如果 nowIndex 为 0，那么现在应该显示的最后一张图片。代码中 `this.slides.length - 1` ，不然就是 减1. 上一张图片。点击 next 同理：

```
nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
```
这边的一大坑点是，你需要将这两个方法写在 计算属性computed 中会比较的优雅，这样一旦 nowIndex 改变，就会触发这两个事件，返回对应的值。

**2、点击数字切换到对应的图片。**

这个的原理和 pre、next 一致，且更加的简单，因为他不需要进行计算，切换的方法只有一个，就是 goto( index ), 所以这边你只需要对每个数字绑定 goto（index）的 click 方法。

**3、自动轮播功能。**

自动轮播，需要用到的就是定时器，即每隔一个时间就调用一次 goto（index）:

```
run () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
```
这边写了一个 run 的方法，每隔 inv 的时间，就去传入 nextIndex 。这样就可以自动的进行图片切换。 


**4、鼠标悬停、移出时进行轮播控制。**


```
@mouseover="clear" @mouseout="run"
```
当鼠标移出的时候，可以轮播，那就调用 run；如果鼠标移入，停止轮播，那就清除定时器，clear。

```
clear () {
      clearInterval(this.invId)
    }
```
<hr/>

<h3>4、vue 动画过渡效果

vue 中 transition 可以利用 v-show 和 v-if 进行触发，我这边利用的是 v-if 的显示隐藏触发动画。

```
<transition name="slide-trans">//新的图片进入
          <img v-if="isShow" :src="slides[nowIndex].src">
</transition>

<transition name="slide-trans-old">//旧的图片移出
          <img v-if="!isShow" :src="slides[nowIndex].src">
</transition>
```
这边在配合 CSS 中的 transform 平移，实现切换动画：

```
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);//大小需要和 show-img 外框的大小一致
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);//大小需要和 show-img 外框的大小一致
}
```
<hr/>
上面的两个组件的代码可以直接使用，轮播 carousel 组件是独立的，可扩展的，可复用在任何的 vue 项目中。你只需要将图片的属性进行自定义，就可以有自己的轮播图了。

