```mermaid
graph LR
   start[homebase.sh] --启动--> boot[初始化设备信息, 日志]
   boot --runApp--> check_alive{homebase主进程是否运行}
   check_alive --no--> fork[forkProcess]
   check_alive --yes--> kill[killProcess]
   kill --> fork
   fork --> check_alive_self[若断开, 1s后重新fork]
   check_alive_self --> fork
   
   boot --startAutoUpdate--> check_update{是否有新版本}
   check_update --yes--> install[installNewPackage]
   check_update --no--> recheck_update[正常5min 或 错误情况下60s一次]
   recheck_update --> check_update
```


```sequence
Title: homebase
Third Cloud -> driver:
driver->homebase:  
homebase->App: 
App->Third Cloud: 
Third Cloud -> driver: hjk
```

```flow
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes 
or No?|approved:>http://www.baidu.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
