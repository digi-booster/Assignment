$(document).ready(function () {
  // variable declare and Set
  let container = $("#container");
  let form = document.getElementById("form");
  let add = $("#add");
  let submit = $("#submit");
  let boss = $("#boss");
  let follower = $(".follower");
  //   add inputs
  add.click(() => {
    container.append(
      '<div><input type="tel" name="tel[]" placeholder="9876543210" /><button type="button" class="remove">Remove</button></div>'
    );
  });
  //   remove input
  container.on("click", ".remove", () => {
    $(this).parent("div").remove();
  });
  // values in console.log
  submit.click((e) => {
    e.preventDefault();
    let fd = new FormData(form);
    console.log(fd.getAll("tel[]"));
  });

  // value set on keyup
  boss.keyup(() => {
    let val = boss.val();
    follower.text(val);
  });
});
