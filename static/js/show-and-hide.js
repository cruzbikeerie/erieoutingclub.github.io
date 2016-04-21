  $(function() {
      var text;
      var text1;
      var jumbotron = $(".jumbotron");

      $("section").hide();
      $("body").css("background-color", "#ffccff");
      jumbotron.show();
      $(".intro-section").show();
      $("footer").hide();

      $(".eoc, .active").click(function() {
        $("body").css("background-color", "#ffccff");
        $("#" + text1).hide();
        $(".join-section").hide();
        jumbotron.show();
        $(".intro-section").show();
        $("footer").hide();
        text = $(event.target).text();
        text1 = text.toLowerCase();
      });
      $("li").children().eq(1).click(function() {
        $("body").css("background-color", "#ffccff;");
        jumbotron.hide();
        $(".intro-section").hide();
        $("#" + text1).hide();
        $(".join-section").show();
        $("footer").hide();
        text = $(event.target).text();
        text1 = text.toLowerCase()
      });
      $("li").children().eq(2).click(function() {
        $("body").css("background-color", "#ffccff;");
        $(".join-section").hide();
        jumbotron.hide();
        $(".intro-section").hide();
        $("#" + text1).hide();
        $(".calendar-section").show();
        $("footer").hide();
        text = $(event.target).text();
        text1 = text.toLowerCase()
      });

      $("li").children().eq(3).click(function() {
        $("body").css("background-color", "#ffccff;");
        $(".join-section").hide();
        jumbotron.hide();
        $(".intro-section").hide();
        $("#" + text1).hide();
        $(".meeting-section").show();
        $("footer").hide();
        text = $(event.target).text();
        text1 = text.toLowerCase()
      });
      $("li").children().eq(4).click(function() {
        $("body").css("background-color", "#ffccff;");
        $(".join-section").hide();
        jumbotron.hide();
        $(".intro-section").hide();
        $("#" + text1).hide();
        $(".question-section").show();
        $("footer").hide();
        text = $(event.target).text();
        text1 = text.toLowerCase()
      });
      $("li").children().eq(5).click(function() {
        $("body").css("background-color", "#B8860B");
        $(".join-section").hide();
        jumbotron.hide();
        $(".intro-section").hide();
        $("#" + text1).hide();
        $(".contact-section").show();
        $("footer").hide();
        text = $(event.target).text();
        text1 = text.toLowerCase()
      });
      $("li").children().eq(6).click(function() {
        $("body").css("background-color", "#ffccff;");
        $(".join-section").hide();
        jumbotron.hide();
        $(".intro-section").hide();
        $("#" + text1).hide();
        $("footer").show();
        text = $(event.target).text();
        text1 = text.toLowerCase()
      });

      $(".joinNow").click(function() {
        $("body").css("background-color", " #B8860B");
        $(".intro-section").hide();
        $("#" + text1).hide();
        jumbotron.hide();
        $(".join-section").show();
        $("footer").hide();
        text = $(event.target).text();
        text1 = text.toLowerCase();
      });
    });
