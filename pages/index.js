
const Home = (props) => (
    <>
         
<h5>Production ></h5>
<p>
    admgudang:<br/>
    -input pengajuan bahan baku<br/>
    -input stock garam dan kemasan tiba<br/>
    -lihat stock garam dan kemasan<br/>
    -lihat stock garam dan kemasan perkiraan bertambah<br/>
    -acc pemakaian bahan baku<br/>
    -input hasil production > bahan baku terpakai > hasil bersih<br/>
    -lihat stock produksian<br/>
</p>
<p>
    qcgudang:<br/>
    -input pengajuan bahan baku<br/>
    -input stock yodium tiba<br/>
    -lihat stock yodium n garam<br/>
    -lihat stock yodium perkiraan bertambah hingga tanggal<br/>
    -lihat stock garam dan kemasan perkiraan bertambah hingga tanggal<br/>
    -input pemakaian bahan baku yodium dab garam untuk diproduksi(SP)<br/>
    -lihat stock produksian<br/>
</p>
<p>
    qagudang:<br/>
    -review dan teruskan pengajuan penambahan stock<br/>
    -input pengajuan pembayaran(-gaji -upah -lain")<br/>
    -lihat stock bahan baku n produksian<br/>
    -lihat stock bahan baku n produksian (adm|qa) perkiraan bertambah hingga tanggal<br/>
    -acc pengiriman hasil production<br/>
</p>
<h5>Distributor ></h5>
<p>
    admsales:<br/>
    -input pengajuan penambahan stock(SP)<br/>
    -input stock tiba<br/>
    -lihat stock<br/>
    -lihat stock perkiraan bertambah hingga tanggal<br/>
    -lihat list D'O<br/>
    -input invoice D'O terbayar(upload invoice)<br/>
</p>
<p>
    sales:<br/>
    -review dan teruskan pengajuan penambahan stock<br/>
    -lihat stock<br/>
    -lihat stock perkiraan bertambah hingga tanggal<br/>
    -input penjualan(SP)<br/>
    -lihat list D'O<br/>
</p>
<p>
    qasales:<br/>
    -lihat stock<br/>
    -lihat stock perkiraan bertambah hingga tanggal<br/>
    -lihat list D'O<br/>
</p>
<h5>Accountant:</h5>
<p>
    -list pembelian acc<br/>
    -input pembelian(upload invoice)<br/>
    -input pembayaran(upload invoice)<br/>
    -lihat D'O sudah|belum terbayar dan jatuh tempo<br/>
    -input konfirmasi D'O terbayar<br/>
    -tampilkan modal, neraca ,arus kas n sheetbalance<br/>
</p>
<h5>top:</h5>
<p>
    -acc n revisi pengajuan qa(SP)<br/>
    -lihat stock bahan baku n produksian<br/>
    -lihat D'O sudah|belum terbayar dan jatuh tempo<br/>
    -lihat modal, neraca ,arus kas n sheetbalance<br/>
</p>
<h5>Admin Web|HRD</h5>
<p>
  -Buat|Tambah Production dan Distributor baru(Nomor Kantor)<br/>
  -Buat Account baru<br/>
  -Menentukan|Mengganti User tetap untuk pengelola Production dan Distributor<br/>
  -Memberikan otoritas akses pengguna<br/>
  -Mutasi otoritas akses pengguna<br/>
  -Dapat melihat peforma|kinerja pengguna filter by otoritas<br/>
</p>
<h5>
  Dashboard User
</h5>
<p>
  -Tampilkan Otoritas yang akfif<br/>
  -Akses tampilan berdasarkan Otoritas yang akfif<br/>
  -History peforma|kinerja pengguna filter by otoritas<br/>
</p>
<h5>Note:</h5>
<p>
    -korelasi uang masuk|keluar(Accountant) untuk Neraca dan arus kas<br/>
    -Nota Bon|Form (Pengajuan, Pembayaran, Pejualan) item harus didaftakan terlebih dahulu, sehingga keluaran nota bisa disesuiakan berdasarkan item
</p>
</>
)
  
  export default Home;