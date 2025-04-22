function add() {
  var addcross = `<div id="add" onclick="add()">
        <h2>+</h2>
      </div>`;
  var mother = document.getElementById("mother-box");
  var html = `
    <div id="study2" class="studybox">
        <h2>TESTE</h2>
        <p>Link</p>
    </div>`;
  var boxes = document.getElementsByClassName("studybox");
  var boxesHTML = Array.from(boxes)
    .map((box) => box.outerHTML)
    .join("");
  mother.innerHTML = boxesHTML + html;
}
