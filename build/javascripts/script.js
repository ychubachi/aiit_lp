(function() {

  $(document).ready(function() {
    return $("#submit").click(function(event) {
      var atpos, dotpos, email, family_name, given_name;
      family_name = $("#family_name").val();
      console.log("family_name=" + family_name);
      if (family_name === null || family_name === "") {
        alert("「姓」をご記入ください。");
        return false;
      }
      given_name = $("#given_name").val();
      console.log("given_name=" + given_name);
      if (given_name === null || given_name === "") {
        alert("「名」をご記入ください。");
        return false;
      }
      email = $("#email").val();
      if (email === null || email === "") {
        alert("「E-Mail」をご記入ください。");
        return false;
      }
      atpos = email.indexOf("@");
      dotpos = email.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("E-Mailアドレスの形式が正しくありません");
        return false;
      }
      $("#email2").val(email);
      alert("Thanks for visiting!");
      return false;
    });
  });

}).call(this);
