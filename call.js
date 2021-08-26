function func1 () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('this is first!!')
    }, 200)
  })
}

function func2 () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('this is second')
    }, 300)
  })
}

function func3 () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('this is third')
    }, 500)
  })
}

async function msg () {
  const a = await func1()
  const b = await func2()
  const c = await func3()

  console.log(`${a} ${b} ${c}`)
}

msg()
