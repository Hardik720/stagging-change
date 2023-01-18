function buttonColor(old_class) {
  console.log(old_class);
  var new_class = "but-new-change";
  if (old_class == new_class) {
    document.getElementsByClassName(old_class).ClassName = "but-name";
  } else {
    document.getElementsByClassName(old_class).ClassName = new_class;
  }
}
c:\Users\HARDIK\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html