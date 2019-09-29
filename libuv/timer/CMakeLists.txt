cmake_minimum_required(VERSION 3.6)
project(libuv_timer)

set(CMAKE_C_FLAGS)

link_libraries(/usr/local/Cellar/libuv/HEAD-9e80057/lib/libuv.a)
include_directories(/usr/local/Cellar/libuv/HEAD-9e80057/include)

add_executable(timeout.out timeout.c /usr/local/include/node/uv.h)
