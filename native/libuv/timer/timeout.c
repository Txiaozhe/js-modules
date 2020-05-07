#include <uv.h>
#include <stdio.h>

// int repeat = 0;

void timeout_cb(uv_timer_t* handler) {
  printf("timerout...\n");
}

void interval_cb(uv_timer_t* handler) {
  printf("interval...\n");
}

uv_timer_t* setTimeout(uv_timer_cb cb, uint64_t timeout) {
  uv_loop_t* loop = uv_loop_new();
  uv_timer_t timer;
  int err = uv_timer_init(loop, &timer);
  uv_timer_start(&timer, cb, timeout, 0);
  uv_run(loop, UV_RUN_DEFAULT);
  return &timer;
}

void clearTimeout(uv_timer_t* handler) {
  uv_timer_stop(handler);
  uv_close((uv_handle_t*)handler, NULL);
}

uv_timer_t* setInterval(uv_timer_cb cb, uint64_t interval) {
  uv_loop_t* loop = uv_loop_new();
  uv_timer_t timer;
  int err = uv_timer_init(loop, &timer);
  uv_timer_start(&timer, cb, interval, interval);
  uv_run(loop, UV_RUN_DEFAULT);
  return &timer;
}

void clearInterval(uv_timer_t* handler) {
  uv_timer_stop(handler);
  uv_close((uv_handle_t*)handler, NULL);
}

int main() {
  uv_timer_t* timer = setTimeout(timeout_cb, 1000);
  uv_timer_t* interval = setInterval(interval_cb, 1000);
}
