function array(){
    let orginal_array=[]
    let arr1=Number(document.getElementById('s1').value)
    let arr2=Number(document.getElementById('s2').value)
    for(let i=arr1; i<arr2; i++){
       isPrime=true
       for(let j=2; j<=i; j++){
        if(i%j==0 && i != j){
            isPrime=false
            break
        }
       }
       if(isPrime==true){
        orginal_array.push(i)
       }
    }
  document.getElementById('array_prime').innerHTML=orginal_array
}
