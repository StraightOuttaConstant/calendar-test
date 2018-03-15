var CalendarPage = {
  template: "#calendar-page",
  data: function() {
    return {
      events: []
    };
  },
  created: function() {
    axios.get('/calendar_events')
    .then(function(response) {
      this.events = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: CalendarPage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
