function getTriangleArea(a,h) {  
  if (a <= 0 || h <= 0) {
      return "Niwłaściwe dane";
  } else {
      return  a*h/2;
  }
};

triangle1Area = console.log(getTriangleArea(5,8));
triangle2Area = console.log(getTriangleArea(6,2));
triangle3Area = console.log(getTriangleArea(-1,8));