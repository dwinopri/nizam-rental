import logo from './logo.svg';
import './App.css';

import Footer from './components/footer/footer';

import armadaVeloz from "./homeAsset/armada/veloz.png"
import armadaGranmax from "./homeAsset/armada/granmax.png"
import armadaXenia from "./homeAsset/armada/xenia.png"
import header from "./homeAsset/header.png"
import armadaElfLong from "./homeAsset/armada/elf long.png"
import armadaElf from "./homeAsset/armada/elf.png"

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="headerText">
          <p className="headerTitle">LAYANAN TERBAIK UNTUK PERJALANAN ANDA</p>
          <p className="headerDesc">
            Di sini, kami berkomitmen untuk memberikan layanan terbaik yang akan
            membuat setiap perjalanan Anda lebih istimewa. Dengan perhatian
            penuh pada kenyamanan, keamanan, dan kepuasan Anda, kami memastikan
            setiap momen perjalanan menjadi pengalaman yang tak terlupakan.
          </p>
          <a
            href="https://wa.me/+6282374773397"
            target="blank"
            className="headerButton"
          >
            <p className="headerButtonP">Booking Now</p>
          </a>
        </div>
        <div className="headerImgContainer">
          <img src={header} className="headerImg" />
        </div>
      </div>
      <div className="choose">
        <div className="chooseTitleContainer">
          <p className="chooseTitle">Kenapa Memilih Kami?</p>
          <p className="chooseDesc">
            Berikut adalah alasan mengapa Anda harus memilih Rental Mobil Kami.
          </p>
        </div>
        <div className="chooseCardContainer">
          <div className="chooseCard">
            <svg
              className="chooseCardIcon"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.643 51.8456C18.9868 52.486 20.4567 52.8184 21.9454 52.8184H43.3296C48.2564 52.8184 52.4488 49.2304 53.2096 44.3632L55.7132 28.35C56.4716 23.498 52.72 19.1143 47.8092 19.1143H34.6742V9.68385C34.6742 6.09345 31.7636 3.18286 28.1732 3.18286C25.82 3.18286 23.6505 4.45453 22.5009 6.50781L14.1915 21.3481C13.69 22.2437 13.4267 23.2529 13.4267 24.2794V46.0492C13.4267 48.3624 14.7568 50.47 16.8452 51.4652L17.643 51.8456ZM4.17452 22.0811C3.11751 22.0811 2.1038 22.5009 1.35639 23.2483C0.60898 23.9958 0.189087 25.0095 0.189087 26.0665L0.189089 46.5168C0.189089 47.574 0.60898 48.5876 1.35639 49.3352C2.1038 50.0824 3.11751 50.5024 4.17452 50.5024L6.1608 50.5016C7.26504 50.5012 8.15992 49.6056 8.15992 48.5016V24.0802C8.15992 23.5496 7.94908 23.0408 7.57384 22.6657C7.19856 22.2906 6.68964 22.08 6.15908 22.0802L4.17452 22.0811Z"
                fill="black"
              />
            </svg>
            <p className="chooseCardTitle">Harga Terjangkau</p>
            <p>
              Kami menyediakan rental mobil berkualitas dengan harga terjangkau
              untuk kenyamanan dan kepuasan Anda.
            </p>
          </div>

          <div className="chooseCard">
            <svg
              className="chooseCardIcon"
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_30_205)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.7143 18.9644C33.7143 25.9468 28.0539 31.6072 21.0714 31.6072C14.089 31.6072 8.42857 25.9468 8.42857 18.9644C8.42857 11.982 14.089 6.32153 21.0714 6.32153C28.0539 6.32153 33.7143 11.982 33.7143 18.9644ZM21.0714 35.8214C9.43402 35.8214 0 45.2555 0 56.8928C0 58.0564 0.943402 59 2.10714 59H40.0357C41.1994 59 42.1429 58.0564 42.1429 56.8928C42.1429 45.2555 32.7088 35.8214 21.0714 35.8214ZM56.8933 59H47.1056C47.3045 58.3324 47.4111 57.6249 47.4111 56.8928C47.4111 48.2911 43.2879 40.6525 36.9101 35.8456C37.2477 35.8295 37.5873 35.8214 37.9289 35.8214C49.5663 35.8214 59.0004 45.2555 59.0004 56.8928C59.0004 58.0564 58.0568 59 56.8933 59ZM37.9289 31.6072C36.6573 31.6072 35.4296 31.4195 34.272 31.0703C37.1971 27.8824 38.9825 23.6319 38.9825 18.9644C38.9825 14.2969 37.1971 10.0463 34.2719 6.85848C35.4296 6.50924 36.6573 6.32153 37.9289 6.32153C44.9112 6.32153 50.5719 11.982 50.5719 18.9644C50.5719 25.9468 44.9112 31.6072 37.9289 31.6072Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_30_205">
                  <rect width="59" height="59" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="chooseCardTitle">Sudah Terpercaya</p>
            <p>
              Kami adalah perusahaan resmi terdaftar, menghadirkan kenyamanan
              dan kepercayaan di setiap perjalanan Anda!
            </p>
          </div>

          <div className="chooseCard">
            <svg
              className="chooseCardIcon"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_31_213)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.1064 37.3244C32.4305 35.98 34.4589 34.1814 36.0703 32.0499C35.5765 31.2968 35.199 30.4148 34.9777 29.4039L34.901 29.0533C34.4514 26.9996 32.804 25.422 30.7328 25.0617C22.4456 23.6199 22.4454 11.7231 30.7328 10.2813C32.7365 9.93276 34.3435 8.445 34.8532 6.48928C31.1969 2.50073 25.9437 0 20.1064 0C9.06076 0 0.106445 8.95432 0.106445 20C0.106445 27.4028 4.12844 33.8663 10.1064 37.3244V42C10.1064 44.2092 11.8973 46 14.1064 46H26.1064C28.3156 46 30.1064 44.2092 30.1064 42V37.3244ZM10.1064 53C10.1064 51.3432 11.4496 50 13.1064 50H27.1064C28.7633 50 30.1064 51.3432 30.1064 53C30.1064 54.6568 28.7633 56 27.1064 56H13.1064C11.4496 56 10.1064 54.6568 10.1064 53ZM39.226 6.86908C39.9583 3.52374 44.7216 3.50292 45.4832 6.84172L45.5192 6.99956C45.5432 7.10716 45.566 7.20656 45.5904 7.31016C46.4676 11.0465 49.4912 13.9015 53.2764 14.56C56.7656 15.167 56.7656 20.176 53.2764 20.783C49.4712 21.445 46.4352 24.327 45.5764 28.0928L45.4832 28.5013C44.7216 31.8401 39.9583 31.8192 39.226 28.4739L39.1493 28.1234C38.3219 24.3438 35.2901 21.4404 31.4783 20.7772C27.9956 20.1713 27.9955 15.1717 31.4783 14.5658C35.2768 13.905 38.3008 11.0194 39.1406 7.25912L39.1972 7.00116L39.226 6.86908Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_213">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="chooseCardTitle">Berpengalaman</p>
            <p>
              Percayakan perjalanan Anda kepada kami, rental mobil berpengalaman
              dengan layanan nyaman, aman, dan memuaskan!
            </p>
          </div>

          <div className="chooseCard">
            <svg
              className="chooseCardIcon"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_31_217)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.12727 8.78596C2.12727 8.18857 2.42435 7.36657 3.50506 6.35839C4.58946 5.34678 6.2898 4.32479 8.59248 3.41622C13.1835 1.60472 19.6905 0.431396 26.9998 0.431396C34.3092 0.431396 40.8163 1.60472 45.4071 3.41622C47.7098 4.32479 49.4104 5.34678 50.4946 6.35839C51.5754 7.36657 51.8724 8.18857 51.8724 8.78596C51.8724 9.38332 51.5754 10.2054 50.4946 11.2135C49.4104 12.2251 47.7098 13.2471 45.4071 14.1557C40.8163 15.9672 34.3092 17.1405 26.9998 17.1405C19.6905 17.1405 13.1835 15.9672 8.59248 14.1557C6.2898 13.2471 4.58946 12.2251 3.50506 11.2135C2.42435 10.2054 2.12727 9.38332 2.12727 8.78596ZM52.1181 16.0731C50.7014 17.0575 49.0224 17.9124 47.1767 18.6406C41.8932 20.7254 34.7587 21.9619 26.9998 21.9619C19.241 21.9619 12.1064 20.7254 6.82282 18.6406C4.97737 17.9124 3.29846 17.0576 1.88196 16.0732V28.3305C2.09784 28.658 2.40447 29.0171 2.83156 29.4054C3.9501 30.4225 5.70309 31.4492 8.07358 32.3611C12.7985 34.1788 19.4892 35.3546 27 35.3546C34.5107 35.3546 41.2016 34.1788 45.9262 32.3611C48.2968 31.4492 50.0499 30.4225 51.1685 29.4054C51.5955 29.0171 51.9021 28.658 52.1181 28.3305V16.0731ZM1.88196 43.2348V34.6863C3.19788 35.5072 4.70587 36.2315 6.34249 36.8611C11.7477 38.9406 19.0518 40.176 27 40.176C34.9481 40.176 42.2523 38.9406 47.6573 36.8611C49.2939 36.2315 50.802 35.5072 52.1181 34.6863V43.2348C52.1181 49.1771 40.873 54 27 54C13.1271 54 1.88196 49.1771 1.88196 43.2348Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_217">
                  <rect width="54" height="54" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="chooseCardTitle">Harga Terjangkau</p>
            <p>
              Kami menyediakan rental mobil berkualitas dengan harga terjangkau,
              mengutamakan kenyamanan, kepuasan, dan kepercayaan pelanggan.
            </p>
          </div>
        </div>
      </div>
      <div className="armada">
        <p className="armadaTitle">Armada</p>
        <div className="armadaCardContainer">
          <div className="armadaCard">
            <a href="https://wa.me/+6282374773397" className="armadaA">
              <img src={armadaVeloz} className="armadaImg" />
              <p className="armadaCardTitle">Avanza Veloz</p>
              <div className="armadaHarga">
                <p>Tarif Sewa:</p>
                <div className="hargaList">
                  <ul>
                    <li>
                      <div className="list">
                        <p className="durasi">12 Jam</p>
                        <p className="harga">: 300 Ribu</p>
                      </div>
                    </li>
                    <li>
                      <div className="list">
                        <p className="durasi">24 Jam</p>
                        <p className="harga">: 350 Ribu</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div className="armadaCard">
            <a href="https://wa.me/+6282374773397" className="armadaA">
            <img src={armadaGranmax} className="armadaImg" />
            <p className="armadaCardTitle">Suzuki Granmax</p>
            <div className="armadaHarga">
              <p>Tarif Sewa:</p>
              <div className="hargaList">
                <ul>
                  <li>
                    <div className="list">
                      <p className="durasi">12 Jam</p>
                      <p className="harga">: 300 Ribu</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <p className="durasi">24 Jam</p>
                      <p className="harga">: 350 Ribu</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </a>
          </div>

          <div className="armadaCard">
            <a href="https://wa.me/+6282374773397" className="armadaA">
            <img src={armadaXenia} className="armadaImg" />
            <p className="armadaCardTitle">Xenia</p>
            <div className="armadaHarga">
              <p>Tarif Sewa:</p>
              <div className="hargaList">
                <ul>
                  <li>
                    <div className="list">
                      <p className="durasi">12 Jam</p>
                      <p className="harga">: 300 Ribu</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <p className="durasi">24 Jam</p>
                      <p className="harga">: 350 Ribu</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </a>
          </div>

          <div className="armadaCard">
            <a href="https://wa.me/+6282374773397" className="armadaA">
              <img src={armadaElfLong} className="armadaImg" />
              <p className="armadaCardTitle">Elf Long</p>
              <div className="armadaHarga">
                <p>Tarif Sewa:</p>
                <div className="hargaList">
                  <ul>
                    <li>
                      <div className="list">
                        <p className="durasi">12 Jam</p>
                        <p className="harga">: 300 Ribu</p>
                      </div>
                    </li>
                    <li>
                      <div className="list">
                        <p className="durasi">24 Jam</p>
                        <p className="harga">: 350 Ribu</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div className="armadaCard">
            <a href="https://wa.me/+6282374773397" className="armadaA">
              <img src={armadaElf} className="armadaImg" />
              <p className="armadaCardTitle">Elf</p>
              <div className="armadaHarga">
                <p>Tarif Sewa:</p>
                <div className="hargaList">
                  <ul>
                    <li>
                      <div className="list">
                        <p className="durasi">12 Jam</p>
                        <p className="harga">: 300 Ribu</p>
                      </div>
                    </li>
                    <li>
                      <div className="list">
                        <p className="durasi">24 Jam</p>
                        <p className="harga">: 350 Ribu</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="testimonialContainer">
        <p className="testimonialTitle">Testimoni</p>
        <div className="testimonialCardContainer">
          <div className="testimonialCard">
            <p className="testimonialCardTitle">User 1</p>
            <p className="testimonialCardDesc">
              Layanan di Nizam rental car sangat profesional! Mobilnya bersih,
              nyaman, dan sesuai deskripsi. Proses penyewaan cepat, dan stafnya
              sangat ramah. Harga juga terjangkau. Sangat puas, pasti akan
              kembali lagi.
            </p>
          </div>

          <div className="testimonialCard">
            <p className="testimonialCardTitle">User 2</p>
            <p className="testimonialCardDesc">
              Pengalaman pertama menyewa mobil di sini sangat berkesan. Kondisi
              mobil sangat terawat, perjalanan jadi lebih nyaman. Customer
              service juga sangat membantu, benar-benar memudahkan.
            </p>
          </div>

          <div className="testimonialCard">
            <p className="testimonialCardTitle">User 3</p>
            <p className="testimonialCardDesc">
              Terima kasih Nizam rental car untuk pelayanan yang luar biasa!
              Armada lengkap, harga bersahabat, dan prosesnya sangat praktis.
              Cocok untuk kebutuhan liburan maupun bisnis. Tidak mengecewakan.
            </p>
          </div>

          <div className="testimonialCard">
            <p className="testimonialCardTitle">User 4</p>
            <p className="testimonialCardDesc">
              Puas banget sewa mobil di Nizam rental car. Mobilnya irit bahan
              bakar dan nyaman untuk perjalanan jauh. Proses pemesanan online
              juga mudah. Ini rental mobil terbaik yang pernah saya coba
            </p>
          </div>

          <div className="testimonialCard">
            <p className="testimonialCardTitle">User 5</p>
            <p className="testimonialCardDesc">
              Sangat direkomendasikan! Mobilnya selalu bersih dan wangi,
              pelayanan ramah, serta harga transparan tanpa biaya tambahan.
              Liburan keluarga jadi lebih menyenangkan berkat layanan dari Nizam
              Rental car
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
