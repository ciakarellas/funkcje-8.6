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

//przy pierwszy commit tego projektu wyskoczyło mi takie powiadomienie. Czemu sie tak stało. Czemu to służy?

/*Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 11 insertions(+)
*/