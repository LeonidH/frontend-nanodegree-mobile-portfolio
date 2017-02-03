// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
    const t = window.performance.timing;
    const dcl = t.domContentLoadedEventStart - t.domLoading;
    const complete = t.domComplete - t.domLoading;
    const stats = document.getElementById("crp-stats");
    stats.textContent = `DCL: ${dcl}ms, onload: ${complete}ms`;
}

function loadImages() {
    const images = document.getElementsByClassName("loadable");
    for (let n = 0; n < images.length; n++) {
        images[n].src = images[n].getAttribute("data-src");
    }
}

window.addEventListener("load",
    function(event) {
        logCRP();
        loadImages();
        (function(i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            i[r] = i[r] ||
                function() {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
        // Optional TODO: replace with your Google Analytics profile ID.
        ga("create", "UA-90954736-1", "auto");
        ga("send", "pageview");
    });