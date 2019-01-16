var button = document.querySelector(".search_head");
    var form = document.querySelector(".form_wrap");
    var full_form = document.querySelector(".form_find_hotel");
    var in_date = form.querySelector(".in_date");
    var out_date = form.querySelector(".out_date");
    full_form.addEventListener("submit", function(evt) {
      if (!in_date.value || !out_date.value) {
        evt.preventDefault();
        form.classList.add("submit_error");
      }
    });

    form.classList.add("form_wrap_close");

    button.addEventListener("click", function(evt) {
      evt.preventDefault();
      form.classList.toggle("form_wrap_close");
      form.classList.remove("submit_error");
    });
