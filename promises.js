var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  console.log('Sync code started');

  // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
  var p1 = new Promise(
    // a função resolve() é chamada com a capacidade para resolver ou 
    // rejeitar a promise
    function(resolve, reject) {       
      console.log('Async code started');
      // Isto é apenas um exemplo para criar assincronismo
      setTimeout(
        function() {
          // Cumprimos a promessa !
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // definimos o que fazer quando a promise for realizada
  p1.then(
    // apenas logamos a mensagem e o valor
    function(val) {       
      console.log('Promise fulfilled');
    });

         
  console.log('sync code terminated');
}testPromise()