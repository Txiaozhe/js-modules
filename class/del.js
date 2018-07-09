function del(id, end) {
    if(id < end) {
        // pool.getConnection((err, conn) => {
            // conn.query('DELETE FROM ?? WHERE id = ?', [
                // 'db_rpt_fentuan.rpt_dws_anchor_info_total_a_tbl_i_d', id
            // ], (err, _1, _2) => {
                // if(err) {
                    
                // } else {
                    console.log('del success, ', id);
                // }
                id++;
                // conn.release();
                del(id, end);
            // });
        // });
    }
}

for(let i = 144036; i < 100000000; i += 1000000) {
    del(i, i + 1000000);
}



