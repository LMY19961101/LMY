<template>
  <div id="app">
    <!-- 第一行 -->
    <droppable
      class="drop-box root"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @drop="onDrop"
      @dragenter="onDragEnter"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <div class="root-title">Root</div>
      <div class="root-content"></div>
    </droppable>
    <!-- 第二行 -->

    <droppable class="rack-container" @drop="onDropBack">
      <draggable
        class="rack"
        id="rack"
        :data="'rack'"
        @dragstart="onSourceDragStart"
        @dragend="onSourceDragEnd"
      >
        <droppable @dragenter="rackEnter" @drop="onDropRackContent">
          <div class="rack-title">Rack 1</div>
          <div class="rack-content"></div>
        </droppable>
      </draggable>
    </droppable>

    <droppable class="host-container" @drop="onDropHost">
      <draggable class="host" id="host" @dragstart="hostDragStart">
        <div class="host-title">Host 1</div>
        <div class="host-content"></div>
      </draggable>
    </droppable>

    <!-- </div> -->
    <!-- <div class="rack">
        <div class="rack-title">Rack 2</div>
        <div class="rack-content"></div>
      </div>
      <div class="rack">
        <div class="rack-title">Rack 3</div>
        <div class="rack-content"></div>
    </div>-->
    <!-- </div> -->
    <!-- 第三行 -->
    <!-- <div>
      <div class="host">
        <div class="host-title">Host 1</div>
        <div class="host-content"></div>
      </div>
    </div>-->
  </div>
</template>

<script>
import Draggable from '@/components/drag/draggable'
import Droppable from '@/components/drag/droppable'
import { Drag, Drop } from 'dnd.js'
export default {
  name: 'Drags',
  components: {
    Draggable,
    Droppable
  },
  data () {
    return {
      isEnter: false,
      cloneData: ''
    }
  },
  methods: {
    onSourceDragStart (params) {
      console.log('rack开始被拖动', params)
      new Drag(params.el, {
        data: 'rack',
        onDragEnd: function(params) {
          !params.target && params.methods.removeDragedNode('back')
        }
      })
    },
    hostDragStart (params) {
      console.log('host开始被拖动')
      new Drag(params.el, {
        data: 'host',
        onDragEnd: function(params) {
          !params.target && params.methods.removeDragedNode('back')
        }
      })
    },
    onSourceDragEnd (params) {
      console.log('rack被拖动结束', params)
    },
    onDragStart (params) {
      console.log('root监听到拖动开始', params.data)
      if (params.data === 'rack') {
        params.el.style.background = '#ccc'
      } else {
        params.el.style.background = 'rgba(0, 0, 255, 0.1)'
      }
    },
    onDragEnd (params) {
      console.log('root监听到拖动结束', params)
    },
    onDrop (params) {
      console.log('root监听到拖动被放下', params)
      params.methods.removeDragedNode('fade')
      // var newNode = params.sourceNode
      this.cloneData = params.sourceNode.cloneNode(true)
      params.el.childNodes[2].appendChild(params.sourceNode)
      console.log(this.cloneData)
    },
    onDropBack (params) {
      params.methods.removeDragedNode('fade')
      params.el.appendChild(params.sourceNode)
    },
    onDropRackContent (params) {
      console.log(params)
      params.methods.removeDragedNode('fade')
      params.el.childNodes[2].appendChild(params.sourceNode)
    },
    onDropHost (params) {
      params.methods.removeDragedNode('fade')
      params.el.appendChild(params.sourceNode)
    },
    onDragEnter (params) {
      this.isEnter = true
      console.log('root监听到被拖动元素进入当前范围')
    },
    rackEnter (params) {
      console.log('rack监听被拖动元素进入当前范围')
    },
    onDragOver (params) {
      // console.log('root监听到被拖动元素在上方移动, 这个调用调多次就不打印了')
    },
    onDragLeave (params) {
      // params.methods.hideStateIcon()
      this.isEnter = false
      console.log('root监听到被拖动元素离开当前范围')
    },
    createNewDrap (element) {
      console.log(element)
      new Drag(element, {
        onDragEnd: function(params) {
          console.log(params.el)
          var parent = params.el.parentElement
          parent.removeChild(params.el)
        }
      })
    }
  }
}
</script>

<style scoped>
.root {
  width: 300px;
  height: 200px;
  border: 1px solid blue;
  position: relative;
}

.root-title {
  background: blue;
  color: white;
  height: 40px;
}

.root-content {
  width: 100%;
  height: 160px;
}

.rack {
  width: 120px;
  height: 140px;
  border: 1px solid #f19e1f;
  display: inline-block;
  position: relative;
  /* top: 300px; */
}

.rack-title {
  background: #f19e1f;
  color: white;
  height: 40px;
}

.rack-content {
  width: 100%;
  height: 100px;
}

.host {
  width: 70px;
  height: 90px;
  border: 1px solid #f19e1f;
  display: inline-block;
  position: relative;
}

.host-title {
  width: 100%;
  height: 30px;
  background: #cccccc;
}

.host-content {
  width: 100%;
  height: 60px;
}
.rack-container {
  height: 200px;
  border: 1px solid #333;
}
.host-container {
  /* margin-top: 200px; */
  height: 200px;
  border: 1px solid #333;
}
.rack-drop {
  height: 150px;
  border: 1px solid #099;
  position: relative;
}
</style>
