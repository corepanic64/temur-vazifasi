import Navbar from "@/components/navbar";
import TopicQuestions from "@/components/topic-questions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface TopicData {
  title: string;
  sections: Array<{
    type: "image" | "text";
    content: string;
  }>;
  questions: Question[];
}

const topicData: Record<string, TopicData> = {
  "network-theory": {
    title: "Tarmoq nazaryasi",
    sections: [
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Tarmoq nazaryasi kompyuter tarmoqlari qanday ishlashini tushunish uchun asosdir. Bu fan ikki yoki undan ortiq qurilmalarning o'zaro bog'langan tizimini o'rganadi. Tarmoq kommunikasiyasining asosiy tushunchalarini o'rganish bilan boshlaylik. Tarmoq nazaryasi zamonaviy axborot texnologiyalarining eng muhim sohalaridan biridir. U ma'lumotlarning bir qurilmadan ikkinchisiga qanday uzatilishini, tarmoq arxitekturasi qanday qurilganini va turli xil protokollar qanday ishlashini o'rganadi. Tarmoq nazaryasini bilmasdan zamonaviy IT tizimlarni tushunish va boshqarish mumkin emas. Tarmoqlar bizning kundalik hayotimizning ajralmas qismiga aylangan - internetdan foydalanish, elektron pochta yuborish, videoga qo'ng'iroq qilish - bularning barchasi tarmoq nazaryasi asosida ishlaydi. Tarmoq nazaryasining asosiy maqsadi ma'lumotlarni xavfsiz, tez va ishonchli tarzda uzatishdir.",
      },
      {
        type: "image",
        content: "/osi-model-network-layers.jpg",
      },
      {
        type: "text",
        content:
          "OSI (Open Systems Interconnection) modeli - bu tarmoq kommunikasiyasini tushuntirish uchun mo'ljallangan yettita qatlamli model. Har bir qatlam ma'lum vazifalarni bajaradi. Birinchi qatlam - fizikaviy qatlam (Physical Layer), u kabel, signal va qurilmalar bilan ishlaydi. Ikkinchi qatlam - ma'lumot uzatish qatlami (Data Link Layer), u qurilmalar orasida ma'lumot almashinuvini ta'minlaydi. Uchinchi qatlam - tarmoq qatlami (Network Layer), u ma'lumotlarni bir tarmoqdan ikkinchisiga yo'naltiradi. To'rtinchi qatlam - transport qatlami (Transport Layer), u ma'lumotlarning ishonchli uzatilishini ta'minlaydi. Beshinchi qatlam - seans qatlami (Session Layer), u qurilmalar orasidagi seanslarni boshqaradi. Oltinchi qatlam - taqdimot qatlami (Presentation Layer), u ma'lumotlarni to'g'ri formatda taqdim etadi. Yettinchi qatlam - ilova qatlami (Application Layer), u foydalanuvchi ilovalari bilan ishlaydi. OSI modeli tarmoq muammolarini diagnostika qilishda juda foydali vositadir.",
      },
      {
        type: "image",
        content: "/tcp-ip-protocol-suite.jpg",
      },
      {
        type: "text",
        content:
          "TCP/IP protokol guruhi bugungi kunda barcha tarmoqlarda ishlatiladi. Bu protokol to'plami Internet asosi hisoblanadi. TCP (Transmission Control Protocol) tarmoq orqali ma'lumotlarni ishonchli tarzda yuboradi, IP (Internet Protocol) esa ma'lumotlarni to'g'ri manzilga yo'naltiradi. TCP/IP to'rt qatlamdan iborat: tarmoq interfeysi qatlami, internet qatlami, transport qatlami va ilova qatlami. Har bir qatlam o'z vazifasini bajaradi va yuqori qatlamga xizmat ko'rsatadi. TCP protokoli ulanishga asoslangan (connection-oriented) protokol bo'lib, u ma'lumotlarning to'liq va to'g'ri tartibda yetib borishini kafolatlaydi. IP protokoli esa manzillash va marshrutlash vazifalarini bajaradi. TCP/IP modeli OSI modeliga nisbatan oddiyroq va amaliyotda ko'proq qo'llaniladi. Internetning barcha qurilmalari TCP/IP protokol to'plamidan foydalanadi.",
      },
      {
        type: "image",
        content: "/packet-switching-network.jpg",
      },
      {
        type: "text",
        content:
          "Paketlarni almashinish (Packet Switching) - bu ma'lumotlarni kichik qismlarga bo'lib, ularni tarmoq orqali yuborish usuli. Har bir paket mustaqil yo'l topadi. Bu usul tarmoqlar uchun juda samarali va ishonchli.",
      },
      {
        type: "image",
        content: "/network-bandwidth-latency-qos.jpg",
      },
      {
        type: "text",
        content:
          "Tarmoq xususiyatlari - bandwidth (pralari), latency (kechikish), va QoS (xizmat sifati) bu muhim parametrlar. Bandwidth - bu ikkinchi jadvalda ma'lumotlar miqdori. Latency - paketning manba dan manzilga ketayotgan vaqti. QoS - ma'lum tarmoq shartlarida ishlab turishni ta'minlaydi.",
      },
    ],
    questions: [
      {
        question: "OSI modelining har bir qatlami qanday rol o'ynaydi?",
        options: [
          "IP manzillarni boshqaradi",
          "Kabel, signal va qurilmalar bilan ishlaydi",
          "Dastur qatlamida ishlaydi",
          "Shifrlanganni amalga oshiradi",
        ],
        correctAnswer: 1,
        explanation:
          "OSI modelining birinchi qatlami fizikaviy qatlam bo'lib, u kabel, signal va qurilmalar bilan bevosita ishlaydi.",
      },
      {
        question: "TCP va UDP protokollari orasidagi asosiy farq nima?",
        options: [
          "TCP tezroq, UDP sekinroq",
          "TCP ishonchli ulanish yaratadi, UDP ulanishsiz ishlaydi",
          "UDP faqat WiFi da ishlaydi",
          "TCP faqat lokal tarmoqda ishlaydi",
        ],
        correctAnswer: 1,
        explanation:
          "TCP (Transmission Control Protocol) ishonchli ulanish yaratadi va barcha ma'lumotlar to'g'ri tartibda yetkaziladi. UDP (User Datagram Protocol) ulanishsiz ishlaydi va tezroq lekin kamroq ishonchli.",
      },
      {
        question: "Paket almashinishi (Packet Switching) nima uchun muhim?",
        options: [
          "Tarmoqning tezligini 10 marta oshiradi",
          "Ma'lumotlarni kichik qismlarga bo'lib, ularni tarmoq orqali samarali yuboradi",
          "Faqat WiFi uchun ishlatilinadi",
          "Shifrlashni ta'minlaydi",
        ],
        correctAnswer: 1,
        explanation:
          "Paket almashinishi ma'lumotlarni kichik qismlarga (paketlarga) bo'lib, ularni tarmoq orqali mustaqil yo'l topib yuboradi. Bu usul tarmoqlar uchun samarali va ishonchli.",
      },
      {
        question: "Tarmoq kechikishi (latency) qanday azaldirsa bo'ladi?",
        options: [
          "Faqat kabelni uzunligini qisqartirish bilan",
          "Optik tolali texnologiya, YOQ router o'rnatish, va malumot yo'lini optimallash bilan",
          "Parolni o'zgartirib",
          "Barcha paketlarni shifrlash bilan",
        ],
        correctAnswer: 1,
        explanation:
          "Latency ni azaltirish uchun optik tolali texnologiya ishlatish, router yaxshi o'rnatish, ma'lumot yo'lini optimallash va server joylashuvini yaxshi tanlash kerak.",
      },
      {
        question: "QoS (Xizmat sifati) nima uchun zarur?",
        options: [
          "Parolni ko'proq xavfsiz qilish uchun",
          "Ma'lum tarmoq shartlarida ma'lum sifatdagi xizmatni ta'minlash uchun",
          "Barcha ma'lumotlarni shifrlash uchun",
          "Faqat WiFi uchun",
        ],
        correctAnswer: 1,
        explanation:
          "QoS (Quality of Service) ma'lum turdagi ma'lumotlarga a'zomiylik beradi. Masalan, video o'tkazuv yoki VoIP uchun katta bandwidth beradi.",
      },
    ],
  },
  "network-technologies": {
    title: "Tarmoq texnologiyalari",
    sections: [
      {
        type: "image",
        content: "/wireless-wifi-network-technology.jpg",
      },
      {
        type: "text",
        content:
          "Simsiz tarmoq texnologiyalari bugungi zamonada eng ko'p ishlatiladigan texnologiya. WiFi standartlari - 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac va 802.11ax (WiFi 6). Har bir standart tezligi va qamrovi bilan farqlanadi.",
      },
      {
        type: "image",
        content: "/ethernet-wired-network-cable.jpg",
      },
      {
        type: "text",
        content:
          "Simli tarmoq texnologiyalari hali ham katta tezlik va ishonchlilik beradi. Ethernet kabel - UTP (Unshielded Twisted Pair) va STP (Shielded Twisted Pair) turlari mavjud. Cat5e, Cat6, Cat6a, Cat7 va Cat8 kabellar tezlikka qarab farqlanadi.",
      },
      {
        type: "image",
        content: "/5g-mobile-network-lte.jpg",
      },
      {
        type: "text",
        content:
          "5G texnologiyasi - bu mobil tarmoqlarda yangi bosqich. 4G LTE dan ko'ra juda tezroq va kam kechikish bilan ishlaydi. 5G yengilari, dronlar va IoT qurilmalar uchun ideal. Tezlik 10 Gbps gacha bo'lishi mumkin.",
      },
      {
        type: "image",
        content: "/fiber-optic-network-communication.jpg",
      },
      {
        type: "text",
        content:
          "Optik tolali texnologiya - bu eng tezlik beruvchi texnologiya. Optik tolalar nur orqali ma'lumotlarni yuboradi. Elektromagnit shuning ta'siriga chidamlimi. Uzoq masofalar uchun ideal. Tezlik 100 Gbps va undan ko'p.",
      },
      {
        type: "image",
        content: "/iot-internet-of-things-network.jpg",
      },
      {
        type: "text",
        content:
          "Narsalarning Interneti (IoT) - bu qurilmalarni bir-biriga bog'lash texnologiyasi. Smart home, smart city, industrial IoT - bular IoT ilovalardir. Bluetooth, Zigbee, LoRaWAN protokollari IoT uchun ishlatilinadi.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Dasturiy ta'minlash bilan belgilangan tarmoq (SDN) - bu yangi usul. Tarmoq boshqaruvi merkazi boshqaruvchi tomonidan amalga oshiriladi. Bu tarmoqlarni boshqarish oson va samarali qiladi. OpenFlow protokoli SDN asosi.",
      },
    ],
    questions: [
      {
        question: "WiFi 6 (802.11ax) oldingi versiyalardan qanday farq qiladi?",
        options: [
          "Faqat modem bilan ishlaydi",
          "Ko'proq qurilmani bir vaqtda qo'llash, ko'proq tezlik, va kam kechikish",
          "Faqat simsiz va sim orqali birga ishlaydi",
          "Xavfsizlik faqat bu versiyada mavjud",
        ],
        correctAnswer: 1,
        explanation:
          "WiFi 6 (802.11ax) ko'proq qurilmani bir vaqtda qo'llashi mumkin (OFDMA), ko'proq tezlik beradi va latency kamaytiadi.",
      },
      {
        question: "Fiber optik kabel nima va uning asosiy afzalligi nima?",
        options: [
          "Tez pasaydi va kam xavfsiz",
          "Nur orqali ma'lumot yuboradi, elektromagnit shuning ta'siriga chidamli, va eng tezlik beradi (100+ Gbps)",
          "Faqat lokal tarmoqda ishlaydi",
          "WiFi bilan bir xil tezlikka ega",
        ],
        correctAnswer: 1,
        explanation:
          "Fiber optik kabellar nur orqali ma'lumot yuboradi, elektromagnit shuning ta'siriga chidamli va 100 Gbps va undan ko'p tezlikni ta'minlaydi.",
      },
      {
        question: "5G texnologiyasi 4G LTE dan qancha tez?",
        options: [
          "Bir xil tezlikga ega",
          "Atigi 2 marta tezroq",
          "10 baravar yoki undan ko'p tezroq (100 Mbps dan 10+ Gbps)",
          "LTE kamroq kechikish bilan ishlaydi",
        ],
        correctAnswer: 2,
        explanation:
          "5G texnologiyasi 4G LTE dan 10 va undan ko'p baravar tezroq, kechikish kamroq va ko'proq qurilmani qo'llashi mumkin.",
      },
      {
        question: "IoT qurilmalar tarmoqda qanday ishlaydi?",
        options: [
          "Faqat kompyuter va telefonlar bilan",
          "Bluetooth, Zigbee, LoRaWAN kabi protokollari orqali bir-biriga bog'lanadi",
          "Faqat WiFi orqali",
          "Internet orqali bevosita",
        ],
        correctAnswer: 1,
        explanation:
          "IoT qurilmalar (smart home, industrial IoT) Bluetooth, Zigbee, LoRaWAN kabi maxsus protokollari orqali bir-biriga va tarmoqqa bog'lanadi.",
      },
      {
        question:
          "SDN (Dasturiy ta'minlash bilan belgilangan tarmoq) nima uchun zarur?",
        options: [
          "Faqat xavfsizlik uchun",
          "Tarmoq boshqaruvni merkazi boshqaruvchi tomonidan amalga oshiradi, bu tarmoqlarni boshqarish oson va samarali qiladi",
          "Faqat WiFi uchun",
          "Paket almashinishi uchun",
        ],
        correctAnswer: 1,
        explanation:
          "SDN tarmoq boshqaruvni merkazi boshqaruvchi (controller) tomonidan amalga oshiradi, bu tarmoqlarni boshqarish va yangilash oson qiladi.",
      },
    ],
  },
  "network-devices": {
    title: "Tarmoq qurilmalari",
    sections: [
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Router - bu tarmoqlarni bir-biriga bog'laydigan qurilma. Internetdan ma'lumotlarni oladi va ularni lokal tarmoqga yo'naltiradi. Router IP manzillarni ustida harakat qiladi. WLAN router simsiz tarmoq yaratadi.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Switch - bu qurilmalarni bir xil tarmoqda bog'laydigan qurilma. Managed va Unmanaged switch turlari mavjud. Switch MAC manzillarni ustida harakat qiladi. PoE (Power over Ethernet) bilan qurilmalarni elektr ta'minot beradi.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Firewall - bu xavfsizlik qurilmasi. U tarmoqqa kiradigan va chiqadigan ma'lumotlarni nazorat qiladi. Zararli ma'lumotlarni blokirovka qiladi. Hardware firewall va software firewall turlari mavjud.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Modem - bu Internet ta'minot beruvchisi bilan bog'lanish qurilmasi. Analog siganallarni raqamli ma'lumotga o'zgartiradi va aksincha. ADSL, Cable va Fiber modemlar mavjud. Modem routerga bog'lanadi.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Wireless Access Point (WAP) - bu simsiz tarmoqni yaratadigan qurilma. Router ichida mavjud yoki alohida qurilma sifatida ishlatilinadi. Tezligi va qamrovi WAP modeliga bog'liq.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Network Adapter (NIC) - bu qurilmani tarmoqga bog'laydigan karta. Ethernet, WiFi, va Bluetooth adapterlari mavjud. Har bir kompyuter yoki smartfon NIC bilan jihozlangan.",
      },
    ],
    questions: [
      {
        question: "Router va Switch orasidagi asosiy farq nima?",
        options: [
          "Switch tezroq ishlaydi",
          "Router tarmoqlarni bir-biriga bog'laydi (IP manzil), Switch qurilmalarni bir xil tarmoqda bog'laydi (MAC manzil)",
          "Router faqat WiFi uchun",
          "Ular bir xil narsa",
        ],
        correctAnswer: 1,
        explanation:
          "Router IP manzillar orqali tarmoqlarni bog'laydi, Switch MAC manzillar orqali qurilmalarni bir xil lokal tarmoqda bog'laydi.",
      },
      {
        question: "Firewall qanday tarzda tarmoqni himoya qiladi?",
        options: [
          "Shifrlash orqali",
          "Tarmoqqa kiradigan va chiqadigan ma'lumotlarni nazorat qiladi, ACL ro'yxat qo'lladi va zararli ma'lumotlarni blokirovka qiladi",
          "Faqat parol bilan",
          "Ma'lumotlarni yo'qotib",
        ],
        correctAnswer: 1,
        explanation:
          "Firewall tarmoqqa kiradigan va chiqadigan ma'lumotlarni nazorat qiladi, ACL (Access Control List) qo'lladi va xavfsizlik siyosatiga ko'ra zararli ma'lumotlarni blokirovka qiladi.",
      },
      {
        question: "Modem va Router bir xil narsa ekanmi?",
        options: [
          "Ha, ular bir xil",
          "Yo'q. Modem Internet ta'minot beruvchisi bilan bog'lanadi va raqamga o'zgartirishni amalga oshiradi. Router ma'lumotlarni lokal tarmoqga yo'naltiradi.",
          "Modem tezroq",
          "Router Internet quriradi",
        ],
        correctAnswer: 1,
        explanation:
          "Modem Internet ta'minot beruvchisi bilan bog'lanadi va signalni o'zgartirishni amalga oshiradi. Router ma'lumotlarni lokal tarmoqga yo'naltiradi. Ularni bir-biriga bog'lanadi.",
      },
      {
        question: "Wireless Access Point (WAP) nima uchun kerak?",
        options: [
          "Faqat Internet quriradi",
          "Simsiz tarmoqni yaratadi va qurilmalarga WiFi xizmati beradi",
          "Faqat shifrlash uchun",
          "Modemga o'rnashtiriladi",
        ],
        correctAnswer: 1,
        explanation:
          "Wireless Access Point (WAP) simsiz tarmoq (WiFi) yaratadi va qurilmalarga ulanish xizmati beradi.",
      },
      {
        question: "NIC (Network Adapter) qanday qurilmada ishlatiladi?",
        options: [
          "Faqat routerda",
          "Har bir kompyuter, smartfon va tarmoq qurilmasida tarmoqga bog'lash uchun",
          "Faqat kabelda",
          "Faqat WiFi uchun",
        ],
        correctAnswer: 1,
        explanation:
          "NIC (Network Interface Card) har bir kompyuter, smartfon, printer va boshqa qurilmada tarmoqga bog'lash uchun ishlatiladi.",
      },
    ],
  },
  "network-security": {
    title: "Tarmoq xavfsizligi asoslari",
    sections: [
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Tarmoq xavfsizligi - bu kompyuter tarmoqini va tizimni ta'sirdan himoya qilish. Hakerlar va zararli dasturlardan saqlash kerak. Xavfsizlik siyosati qabul qilish va amalga oshirish muhim.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Shifrlash - bu ma'lumotlarni xavfsiz jo'natishning asosiy usuli. SSL/TLS protokollari Internet orqali ma'lumotlarni shifrlaydi. RSA, AES va boshqa shifrlash algoritmlari mavjud. Kalit - shifrlashning asosi.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Firewall - bu tarmoqning birinchi qatoridagi himoyachisi. Ro'yxat (ACL) qo'lladi - qaysi ma'lumotlar o'tish mumkin yoki mumkin emas. Stateful firewall - ulanishlarni kuzatadi. DPI (Deep Packet Inspection) ham bazo qiladi.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Antivirus va anti-malware dasturlar - bu zararli dasturlarni aniqlash va o'chirish. Harchun Trojan, virusi, ransomware kacha qiladi. Real-time scanning qiladi. Doimiy yangilash kerak.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Ujumchilik sinovi (Penetration Testing) - bu hakerlar kabi o'ylab tarmoqning zaif tomonlarini topish. Regular audit qilish kerak. Oyna topilgandan keyin uni tuzatish kerak.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Parol va autentifikasiya - bu kirish bilan bog'langan xavfsizlik. Kuchli parol kerak. Two-Factor Authentication (2FA) qo'shimcha himoya beradi. Multi-factor Authentication ham mavjud.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "Ma'lumotni zaxiralaш (Backup) - bu ma'lumotni yo'qolmasligi uchun ta'minot. Regular backup qilish kerak. Zaxiralarni alohida joyda saqlash kerak. Disaster recovery rejasi qabul qilish muhim.",
      },
    ],
    questions: [
      {
        question:
          "SSL/TLS shifrlash protokoli qanday ishlab turishni ta'minlaydi?",
        options: [
          "Parolni o'zgartiradi",
          "Internet orqali ma'lumotlarni shifrlaydi va xavfsiz jo'natadi",
          "Faqat WiFi da ishlaydi",
          "Ma'lumotlarni yo'qotib",
        ],
        correctAnswer: 1,
        explanation:
          "SSL/TLS protokoli Internet orqali yuborilayotgan ma'lumotlarni shifrlaydi va qurilma va server orasida xavfsiz bog'lanish yaratadi.",
      },
      {
        question: "Firewall ACL ro'yxati nima va u qanday ishlaydi?",
        options: [
          "Parol saqlash uchun",
          "Qaysi ma'lumotlar o'tish mumkin yoki mumkin emas belgilaydi (ruxsat berish/rad qilish qoidalari)",
          "Barcha ma'lumotlarni blokir qiladi",
          "Faqat WiFi uchun",
        ],
        correctAnswer: 1,
        explanation:
          "ACL (Access Control List) firewall ning ruxsat berish va rad qilish qoidalarini belgilaydi. Qaysi ma'lumotlar, manba va manzillar orqali o'tishi mumkin yoki mumkin emasligini belgilaydi.",
      },
      {
        question: "Penetration Testing (ujumchilik sinovi) nima uchun muhim?",
        options: [
          "Parolni o'zgartirish uchun",
          "Hakerlar kabi o'ylab tarmoqning zaif tomonlarini topish va ularni tuzatish uchun",
          "Barcha ma'lumotlarni shifrlash uchun",
          "Faqat katakli kompaniyalar uchun",
        ],
        correctAnswer: 1,
        explanation:
          "Penetration Testing xavfsizlik mutaxassislari tomonidan hakerlar kabi o'ylab tarmoqning zaif tomonlarini topish va ularni tuzatish uchun bajariladi.",
      },
      {
        question: "Two-Factor Authentication (2FA) nima va uning afzalliklari?",
        options: [
          "Faqat parol ishlatish",
          "Parol + ikkinchi tasdiqlash (SMS, app) - bu kirishni ancha xavfsiz qiladi",
          "Parolni ikki marta o'zgartirishni",
          "Faqat WiFi uchun",
        ],
        correctAnswer: 1,
        explanation:
          "2FA parol va ikkinchi tasdiqlash usuli (SMS, authenticator app) qo'lladi. Bu hakerlar parol topsa ham akkauntni xavfsiz saqlaydi.",
      },
      {
        question: "Ma'lumotni doimiy zaxiralash nima uchun zarur?",
        options: [
          "Tezlikni oshirish uchun",
          "Ma'lumot yo'qolmasligi va disaster vaqtida tiklash uchun",
          "Faqat kompaniyalar uchun",
          "Shifrlash uchun",
        ],
        correctAnswer: 1,
        explanation:
          "Doimiy zaxiralash ma'lumotni yo'qolmasligi va disaster (kompyuter buzilish, haker hujumi) vaqtida tiklashni ta'minlaydi.",
      },
    ],
  },
  "network-standards": {
    title: "Tarmoq standartlari",
    sections: [
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "IEEE (Institute of Electrical and Electronics Engineers) standartlari - bu tarmoq texnologiyasining asos. IEEE 802 - bu lokal va metropolitan tarmoqlar uchun standart. IEEE 802.1, 802.3, 802.11 kabi kichik standartlar mavjud.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "IEEE 802.3 - Ethernet standardi. 10Base-T, 100Base-TX, 1000Base-T, 10GBase-T kabi turli xil sxemalar mavjud. Har bir sxemani tezligi bilan bir-biridan farqlanadi. Cat5e, Cat6 va hokazolar kabel turlari.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "IEEE 802.11 - WiFi standardi. 802.11a, b, g, n, ac, ax kabi versiyalar mavjud. Har bir versiya tezligi va chastotasi bilan farqlanadi. 802.11ax (WiFi 6) eng yangi standart.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "ISO/IEC 7498 - bu OSI modeli uchun standart. Haftaqatlam modeli - bu tarmoq kommunikasiyasini tushunish uchun asos. Qatlama asosi bo'lsa, undan yuqori qatlam uning taqdim etuvchi xizmatziga tayanadi.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "IETF (Internet Engineering Task Force) - bu Internet standartlarini belgilaydi. RFC (Request for Comments) - bu Internet standartlarining asosiy hujjati. TCP/IP, DNS, HTTP kabi protokollari RFC da belgilangan.",
      },
      {
        type: "image",
        content: "/network-theory-diagram.jpg",
      },
      {
        type: "text",
        content:
          "TIA/EIA 568 - bu Ethernet kabelni qo'rqoqning standardi. 568A va 568B bo'g'lanish tartibi mavjud. Cat5e, Cat6 va undan ko'p kabellar uchun kerak. Kabel uzunligi uchun cheklov mavjud - 100 metr lokal tarmoq uchun.",
      },
    ],
    questions: [
      {
        question: "IEEE 802.3 va 802.11 standartlari orasida farq nima?",
        options: [
          "Ular bir xil standart",
          "802.3 Ethernet (simli tarmoq), 802.11 WiFi (simsiz tarmoq) standartlari",
          "802.11 tezroq va xavfsiz",
          "802.3 faqat kompyuterlar uchun",
        ],
        correctAnswer: 1,
        explanation:
          "IEEE 802.3 Ethernet (simli tarmoq) standardi, 802.11 WiFi (simsiz tarmoq) standardi. Har biri o'z texnologiya uchun.",
      },
      {
        question:
          "OSI modeli (ISO/IEC 7498) nima va uni qanday qo'llash mumkin?",
        options: [
          "Faqat parolni o'zgartirish",
          "Haftaqatlam tarmoq modeli - tarmoq kommunikasiyasini tushunish va tarmoq muammolarni hal qilish uchun",
          "Faqat WiFi uchun",
          "Shifrlash standardi",
        ],
        correctAnswer: 1,
        explanation:
          "OSI modeli haftaqatlam model bo'lib, tarmoq kommunikasiyasini tushunish, muammolarni diagnostika qilish va tarmoq dizayn qilish uchun ishlatiladi.",
      },
      {
        question: "RFC (Request for Comments) nima va nega muhim?",
        options: [
          "Faqat emailga javob",
          "Internet standartlarini belgilaydi (TCP/IP, DNS, HTTP kabi) - bu Internet asosidir",
          "Faqat WiFi uchun",
          "Parol o'zgartirishning qaida",
        ],
        correctAnswer: 1,
        explanation:
          "RFC (Request for Comments) Internet standartlarini belgilaydi. TCP/IP, DNS, HTTP va boshqa muhim protokollari RFC da tavsiflangan.",
      },
      {
        question:
          "TIA/EIA 568 standartlari Ethernet kabel o'rnatishda qanday yordam beradi?",
        options: [
          "Kabel uzunligini oshirish",
          "568A va 568B bog'lanish tartibini belgilaydi, standartli o'rnatish va xavfsizlikni ta'minlaydi",
          "Faqat WiFi uchun",
          "Shifrlash uchun",
        ],
        correctAnswer: 1,
        explanation:
          "TIA/EIA 568 Ethernet kabel o'rnatish standartini belgilaydi. 568A va 568B bog'lanish tartibi mavjud va lokal tarmoq uchun 100 metr masofaga cheklov.",
      },
      {
        question:
          "Tarmoq standartlari nima uchun zarur va ular global jihatdan nima beradi?",
        options: [
          "Faqat xavfsizlik uchun",
          "Turli xil vositalarning o'zaro ishlashi (interoperability) va tarmoq texnologiyasining universal qo'llanilishi",
          "Faqat kompaniyalar uchun",
          "Parollni o'zgartirish uchun",
        ],
        correctAnswer: 1,
        explanation:
          "Tarmoq standartlari turli xil vositalar va texnologiyalarning o'zaro ishlashi (interoperability) ni ta'minlaydi va global jihatdan universal qo'llanilishini kafolatlab beradi.",
      },
    ],
  },
};

export default async function TopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const topic = topicData[slug];

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-center text-muted-foreground">Mavzu topilmadi</p>
          <Link href="/" className="text-center block mt-4">
            <Button variant="outline">Bosh sahifaga qaytish</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="outline" className="mb-8 gap-2 bg-transparent">
            <ArrowLeft size={18} />
            Orqaga
          </Button>
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-foreground mb-12">
          {topic.title}
        </h1>

        {/* Sections */}
        <div className="space-y-12">
          {topic.sections.map((section, index) => (
            <div key={index}>
              {section.type === "image" ? (
                <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={section.content || "/placeholder.svg"}
                    alt={`Section ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-foreground">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Topic Questions Component */}
        <TopicQuestions questions={topic.questions} />

        {/* Back Button at End */}
        <div className="mt-12">
          <Link href="/">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft size={18} />
              Bosh sahifaga qaytish
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
