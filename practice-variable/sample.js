// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)

// const foo = () => {
//   let x = 'webcamp'
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for (let i=0; i<10; i++) {
//   console.log(i)
// }
// console.log(i)

var str = "webcamp"

function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

