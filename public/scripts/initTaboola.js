// A *global* property for queuing *all* Taboola commands on this page:
window._taboola = window._taboola || [];

// Fill in the page type, as provided by Taboola:
_taboola.push({ article: "auto" });

!(function (e, f, u, i) {
  if (!document.getElementById(i)) {
    e.async = 1;
    e.src = u;
    e.id = i;
    f.parentNode.insertBefore(e, f);
  }
  // Fill in your Publisher ID (an alphabetic string, as provided by Taboola):
})(
  document.createElement("script"),
  document.getElementsByTagName("script")[0],
  "//cdn.taboola.com/libtrc/ndtv/loader.js",
  "tb_loader_script"
);

if (window.performance && typeof window.performance.mark == "function") {
  window.performance.mark("tbl_ic");
}
