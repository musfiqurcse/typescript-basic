select upd.voucher_date, upd.contra_account_id_id as contra_acc,upd.voucher_master_id_id as vo_master,
upd.credit,upd.debit from (select td.voucher_date,td.voucher_master_id_id,td.contra_account_id_id,
sum(td.credit_amount) as credit,sum(td.debit_amount) as debit from (select fin.*,vc_master.voucher_date from finance_transectiondetails
 as fin inner join finance_vouchermaster as vc_master on fin.voucher_master_id_id=vc_master.id)  as td 
 inner join finance_accountinfo as f_acc on td.master_account_id_id=f_acc.id and 
 f_acc.account_type='Assets'  group by td.contra_account_id_id,td.voucher_master_id_id,
 td.voucher_date) as upd


select upd.voucher_date, upd.contra_account_id_id as contra_acc,upd.voucher_master_id_id as vo_master,upd.credit,upd.debit from (select td.voucher_date,td.voucher_master_id_id,td.contra_account_id_id,sum(td.credit_amount) as credit,sum(td.debit_amount) as debit from (select fin.*,vc_master.voucher_date from finance_transectiondetails as fin inner join finance_vouchermaster as vc_master on fin.voucher_master_id_id=vc_master.id) as td inner join finance_accountinfo as f_acc on td.master_account_id_id=f_acc.id and f_acc.account_type='Assets'  group by td.contra_account_id_id,td.voucher_master_id_id,td.voucher_date) as upd





select upd.voucher_date, upd.contra_account_id_id as contra_acc,upd.voucher_master_id_id as vo_master,
upd.credit,upd.debit from (select td.voucher_date,td.voucher_master_id_id,td.contra_account_id_id,
sum(td.credit_amount) as credit,sum(td.debit_amount) as debit from (select fin.*,vc_master.voucher_date from finance_transectiondetails
as fin inner join finance_vouchermaster as vc_master on fin.voucher_master_id_id=vc_master.id) as td 
inner join finance_accountinfo as f_acc on td.master_account_id_id=f_acc.id and 
f_acc.account_type='Assets'  group by td.contra_account_id_id,td.voucher_master_id_id,
td.voucher_date) as upd

select upd.voucher_date, upd.contra_account_id_id as contra_acc,upd.voucher_master_id_id as vo_master,
upd.credit,upd.debit from (select td.voucher_date,td.voucher_master_id_id,td.contra_account_id_id,
sum(td.credit_amount) as credit,sum(td.debit_amount) as debit from (select fin.*,vc_master.voucher_date from finance_transectiondetails
 as fin inner join finance_vouchermaster as vc_master on fin.voucher_master_id_id=vc_master.id)  as td 
 inner join finance_accountinfo as f_acc on td.master_account_id_id=f_acc.id and 
 f_acc.account_type='Assets'  group by td.contra_account_id_id,td.voucher_master_id_id,
 td.voucher_date) as upd


select upd.voucher_date, upd.contra_account_id_id as contra_acc,upd.voucher_master_id_id as vo_master,upd.credit,upd.debit from (select td.voucher_date,td.voucher_master_id_id,td.contra_account_id_id,sum(td.credit_amount) as credit,sum(td.debit_amount) as debit from (select fin.*,vc_master.voucher_date from finance_transectiondetails as fin inner join finance_vouchermaster as vc_master on fin.voucher_master_id_id=vc_master.id) as td inner join finance_accountinfo as f_acc on td.master_account_id_id=f_acc.id and f_acc.account_type='Assets'  group by td.contra_account_id_id,td.voucher_master_id_id,td.voucher_date) as upd