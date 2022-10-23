//////Anonymous and IIFE function//////

//First question
//Anonymous function
var array = [11,12,13,14,15,16,17,18,19,20]
var oddnumber = function(array){
   var odd_arr=[];
   for (let num of array){
   (num%2 !== 0 )?
   odd_arr.push(num):num;
   }
   return odd_arr
}
console.log(`oddnumbers : [${oddnumber(array)}]`)
 //console.log(oddnumber(array[i]))


//IIFE function
(function(array1){
    for(var i = 0 ; i< array1.length ; i++){
               if(array1[i]%2!=0){
                  console.log(array1[i])
               } 
          }})([11,32,15,37,89,23,22,32,07])

//Second question
//Anonymous function
function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }

//IIFE function
(function(str){
    str = str.toLowerCase().split(' ');
     for(var i = 0; i < str.length; i++) {
       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
       console.log(str.join(' '));
    } 
    })("MUDRA IS MY NAME");

//Third question
//Anonymous function
function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }

//IIFE function
(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          console.log(sum);
    })([1,2,3,4])

//Fourth question
//Anonymous function
function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}

//IIFE function
(function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4])

//fifth question
//Anonymous function
function (arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }

//IIFE function
(function(arr, n)
    {
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++)
    {
    let ans = isPalindrome(arr[i]);
    if (ans == false)
    return false;
    }
    return true;
    })([1,2,3] , 3)

//Seventh question
//Anonymous function
function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }

//IIFE function
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])

//Eight question
//Anonymous function
function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }

//IIFE function
(function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)
