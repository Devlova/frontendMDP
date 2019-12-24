
const Home = (props) => (
    <>
          <h4>Production</h4>
          Gudang :
          <p>
            Admin Gudang > Stock Bahan Baku(Garam, Kemasan) > Input Permintaan Bahan Baku > Input Perkiran Bahan Baku Bertambah > Input Bahan Baku tiba sebenarnya(Acc) || Input Bahan baku rusak
          </p>
          <p>
            QC > Stock Bahan Baku(Yodium) > Input Permintaan Bahan Baku > Input Perkiran Bahan Baku Bertambah > Input Bahan Baku tiba sebenarnya(Acc) || Input Bahan baku rusak
          </p>
          Production :
          <p>
            QC > Input Pemakain bahan baku(Jumlah Yodium, Garam)
          </p>
          Admin Gudang > 
          <p>
            Acc Pemakaian bahan baku(Garam) > Input Bahan Baku terpakai(terpakai n rusak) & Input hasil Production(Jenis n Jumlah)
          </p>
          Pengawas Pabrik >
          <p>
            Lihat Stock Bahan Baku > Lihat Stock Bahan baku(Total, Rusak, Tersedia) > Acc Pengajuan bahan baku
          </p>
          <p>
            Lihat Stock Hasil Production > Lihat Stock Hasil Production(Total Keselurhan Per-Jenis Per-kemasan,Per-ukuran kemasan, Per-tanggal)
          </p>
          <p>
            Pembayaran > Input Pembayaran(Biaya: Gaji, Upah, Lain")
          </p>
          <p>
            Surat perintah / Acc Kegiatan > Acc Pengajuan pengadaan bahan baku > Acc Pemakaian bahan baku > Acc Pengiriman ke Distributor
          </p>
  
          Accountant >
          <p>
            Pembelian > Input Data n Upload invoice pembelian item berdasarkan no order 
          </p>
          <p>
            Pembayaran > Input Pembayaran Pengeluaran(Gaji, Upah, Biaya lain")
          </p>
          <p>
            Penagihan > Form tampilan D'O belum bayar dan Jatuh Tempo > Input Acc tanda terima pembayaran dari D'O
          </p>
  
          Top Level :
          <p>
            Production > Acc Pembelian Pengadan bahan Baku > Lihat Stock Production
          </p>
          <p>
            Accountant > Acc Anggaran Pembayaran untuk Pembelian dan Pembayaran Biaya" >  D'O belum terbayar n Jatuh Tempo
          </p>
          <p>
            Distributor > Trafik Penjualan > Stock Distributor > D'O 
          </p>
          
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
      </>
  )
  
  export default Home;


  import * as React from 'react'
import fetch from "isomorphic-unfetch";

function HomePages({ order }) {
    if (!order) {
    return <div>Sorry, we could not find your order!</div>;
    }

    return (
      <div>
        <h1>HomePages</h1>
        <p>This is my house y&apos;all!</p>
        {order.item.map(order => <div key={order.id}>{order.id} | {order.first_name}</div>)}
      </div>
    );
}

HomePages.getInitialProps = async () => {
  const result = await fetch(`http://localhost:3000/api/listuser`);
  if (result.status === 200) return { order: await result.json() };
  console.log(result);
  return { order: undefined };
};

export default HomePages;

import HomePages from '../components/HomePage';

export default function Home(){
  return (<HomePages/>)
}

const Registration = props => {
  console.log(props);
  return (
    <div className="Registration">
      <p>some text</p>
    </div>
  );
};
const Members = () => {
  return (
    <div className="page-container">
      <Registration hideHowItWorks={true} hideContact={true} />
    </div>
  );
};
export default Members;