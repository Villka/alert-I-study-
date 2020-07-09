const reverse = (str) => {
  let result = '';
  let comen = str.length;
  while (comen > 0){
    comen = comen - 1;
    result = result + str[comen] ;
  }
  return result;
}


alert(reverse('kot'));