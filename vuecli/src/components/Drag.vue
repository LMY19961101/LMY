<template>
  <!-- <div class="root">
    <draggable :data="'希望drop组件接收到的数据'" @dragstart="onSourceDragStart" @dragsend="onSourceDragEnd">
      <div class="drag-content">拖动我</div>
    </draggable>

    <droppable
      class="drop-box"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @drop="onDrop"
      @dragenter="onDragEnter"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <div class="drag-container">被拖动的东西可以在这里放下</div>
    </droppable>
  </div>-->

  <div class="app-root">
    <div class="draggable-node drag1">
      <span class="label">标签1</span>
    </div>
    <div class="draggable-node drag2">
      <span class="label">标签2</span>
    </div>
    <div class="draggable-node drag3">
      <span class="label">标签3</span>
    </div>

    <div class="boxs">
      <div class="droppable-box drop">
        <div class="placeholder">
          <span>区域1</span>
          不接受标签1
        </div>
      </div>
      <div class="droppable-box drop2">
        <div class="placeholder">
          <span>区域2</span>
          不接受标签2
        </div>
      </div>
      <div class="droppable-box drop3">
        <div class="placeholder">
          <span>删除区</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from '@/components/drag/draggable'// form后面的地址根据实际情况而定// form后面的地址根据实际情况而定
import Droppable from '@/components/drag/droppable'// form后面的地址根据实际情况而定
import { Drag } from 'dnd.js'
import { Drop } from 'dnd.js'

export default {
  name: 'Drag',
  components: {
    Draggable,
    Droppable
  },
  created () {
    window.onload = function() {
      var rootNode = document.getElementsByClassName('app-root')[0]

      var draggableNodes = document.getElementsByClassName('draggable-node')
      for (var i = 0; i < draggableNodes.length; i++) {
        new Drag(draggableNodes[i], {
          data: i + 1,
          onDragEnd: function(params) {
            !params.target && params.methods.removeDragedNode('back')
          }
        })
      }

      new Drop('.drop', {
        onDragStart: function(params) {
          if (params.data === 1) {
            params.el.style.background = 'rgba(255, 0, 0, 0.1)'
          } else {
            params.el.style.background = 'rgba(0, 0, 255, 0.1)'
          }
        },
        onDragEnter: function(params) {
          if (params.data === 1) {
            params.methods.showStateIcon('error')
            params.el.style.background = 'rgba(255, 0, 0, 0.2)'
          } else {
            params.methods.showStateIcon('add')
            params.el.style.background = 'rgba(0, 0, 255, 0.2)'
          }
        },
        onDragLeave: function(params) {
          params.methods.hideStateIcon()
          if (params.data === 1) {
            params.el.style.background = 'rgba(255, 0, 0, 0.1)'
          } else {
            params.el.style.background = 'rgba(0, 0, 255, 0.1)'
          }
        },
        onDragEnd: function(params) {
          params.el.style.background = '#fff'
        },
        onDrop: function(params) {
          if (params.data === 1) {
            params.methods.removeDragedNode('back')
          } else {
            params.methods.removeDragedNode('fade')
            var newNode = params.sourceNode.cloneNode(true)
            params.el.appendChild(newNode)
            createNewDrap(newNode)
          }
        }
      })

      new Drop('.drop2', {
        onDragStart: function(params) {
          if (params.data === 2) {
            params.el.style.background = 'rgba(255, 0, 0, 0.1)'
          } else {
            params.el.style.background = 'rgba(0, 0, 255, 0.1)'
          }
        },
        onDragEnter: function(params) {
          if (params.data === 2) {
            params.methods.showStateIcon('error')
            params.el.style.background = 'rgba(255, 0, 0, 0.2)'
          } else {
            params.methods.showStateIcon('add')
            params.el.style.background = 'rgba(0, 0, 255, 0.2)'
          }
        },
        onDragLeave: function(params) {
          params.methods.hideStateIcon()
          if (params.data === 2) {
            params.el.style.background = 'rgba(255, 0, 0, 0.1)'
          } else {
            params.el.style.background = 'rgba(0, 0, 255, 0.1)'
          }
        },
        onDragEnd: function(params) {
          params.el.style.background = '#fff'
        },
        onDrop: function(params) {
          if (params.data === 2) {
            params.methods.removeDragedNode('back')
          } else {
            params.methods.removeDragedNode('fade')
            var newNode = params.sourceNode.cloneNode(true)
            params.el.appendChild(newNode)
            createNewDrap(newNode)
          }
        }
      })


      new Drop('.drop3', {
        onDragStart: function(params) {
          params.el.style.background = 'rgba(0, 0, 255, 0.1)'
        },
        onDragEnter: function(params) {
          params.methods.showStateIcon('delete')
          params.el.style.background = 'rgba(255, 0, 0, 0.3)'
        },
        onDragLeave: function(params) {
          params.methods.hideStateIcon()
          params.el.style.background = 'rgba(0, 0, 255, 0.1)'
        },
        onDragEnd: function(params) {
          params.el.style.background = '#fff'
        },
        onDrop: function(params) {
          params.methods.removeDragedNode('blost')
          rootNode.removeChild(params.sourceNode)
        }
      })

      /**
       * 放入重新创建可拖拽元素
       * @param  {[type]} element [description]
       * @return {[type]}         [description]
       */
      function createNewDrap (element) {
        new Drag(element, {
          onDragEnd: function(params) {
            console.log(params.el)
            var parent = params.el.parentElement
            parent.removeChild(params.el)
          }
        })
      }
    }
  },
  data () {
    return {
      labelList: ['标签1', '标签2', '标签3']
    }
  },
  methods: {
    labelDrag (params) {
      console.log('标签被拖动', params)
    }
    // onSourceDragStart (params) {
    //   console.log('被拖动元素监听到拖动开始')
    // },

    // onSourceDragEnd (params) {
    //   console.log('被拖动元素监听到拖动结束')
    // },

    // onDragStart (params) {
    //   console.log('监听到拖动开始')
    // },
    // onDragEnd (params) {
    //   console.log('监听到拖动结束')
    // },
    // onDrop (params) {
    //   console.log('监听到被拖动元素放下')
    // },
    // onDragEnter (params) {
    //   console.log('监听到被拖动元素进入当前范围')
    // },
    // onDragOver (params) {
    //   // console.log('监听到被拖动元素在上方移动, 这个调用调多次就不打印了')
    // },
    // onDragLeave (params) {
    //   console.log('监听到被拖动元素离开当前范围')
    // }
  }
}
</script>

<style lang="stylus">
// .drop-box {
// width: 100px;
// height: 100px;
// }

// .drag-content {
// width: 50px;
// height: 50px;
// background: #cccccc;
// }

// .drag-container {
// width: 200px;
// height: 100px;
// background: #333333;
// color: white;
// }
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.app-root {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  overflow: auto;
}

.draggable-node {
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  background: orange;
}

.draggable-node:after {
  content: '';
  position: absolute;
  left: 100%;
  top: 0;
  display: block;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-left: 5px solid orange;
  border-bottom: 15px solid transparent;
}

.boxs {
  margin: 20px auto;
}

.droppable-box {
  position: relative;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  border: 1px solid #999;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  text-align: center;
  color: #ccc;
}
</style>
