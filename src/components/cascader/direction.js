// export default {
//   bind: function (el, binding, vnode) {
//     document.addEventListener('click', (e)=> {
//       let { target } = e;
//       if(target === el || el.contains(target)) {
//         console.log('inside')
//         return
//       }else {
//         console.log('outside')
//         binding.value()
//       }
//     })
//   }
// }

let onClickDocument = (e)=> {
  let { target } = e
  callBacks.forEach(item => {
    if(target == item.el || item.el.contains(target)) {
      return
    }else {
      item.callBack()
    }
  });
}
document.addEventListener('click', onClickDocument)

let callBacks = [];

export default {
  bind: function (el, binding, vnode) {
    callBacks.push({
      el,
      callBack: binding.value
    })
  }
}
