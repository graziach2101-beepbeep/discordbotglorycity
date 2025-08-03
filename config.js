const { ButtonStyle } = require("discord.js");
module.exports = {
  token:
    "MTQwMTI1MzY3NDc5MzA0MjEyMQ.Gm4-sJ.zkuEtzViFVmsoRCCLoOo7KoKfPFI7NNLEaZ3-E", // โทเคนบอท

  roleAdmin: "1401254972783333560", //ยศแอดมิน
  guild: ["1319919834032635995"], //เซิฟเวอร์
  WhitelistRole: "1374833170859556905", //ยศไวริส
  channelId: "1367958666782707833", //ห้องสำหรับกดรับ
  channelId_Log: "1401255354934886532", // ห้องสำหรับข้อมูล
  // setting ส่วนแรกคือหน้ากด
  main: {
    button_msg: "กดปุ่มเพื่อลงทะเบียนไวริส", // ข้อความปุ่ม
    button_emoji: "✅", // อิโมจิเท่านั้น สามารถใช้อิโมจิพิเศษได้ ตัวอย่าง `<a:784488608782483477:853402922037280780>`
    button_style: ButtonStyle.Success, //จำเป็นต้องมี ButtonStyle อยุ่ข้างหน้าเสมอ มีทั้งหมด 4สี ได้แก่ Primary สีน้ำเงิน , Secondary = เทา , Success = เขียว ,Danger =แดง
    title: "บอทกรอกข้อมูล", // ชื่อหัวข้อ
    iconURL: "https://img5.pic.in.th/file/secure-sv1/1500px.th.png", // รูปไอคอน
    Description: "กรอกใบสมัครเพื่อเข้าร่วยเล่นเซิฟของเราได้ที่นี่!!", // คำอธิบาย
    colors: "#ff0003", // #a7e7ff -> [R, G, B] // 12942973
    image: "https://img2.pic.in.th/pic/2-34639468d0ec9eeed.jpg", // รูปหลัก
  },
  //ชื่อของหัวข้อหลังกดปุ่ม
  modals: {
    title: "บอทกรอกข้อมูล",
  },
  //setting หลังกรอกข้อมูลเสร็จ
  reply_submit: {
    title: "บอทกรอกข้อมูล", // ชื่อหัวข้อ
    iconURL: "https://img5.pic.in.th/file/secure-sv1/1500px.th.png", // รูปไอคอน
    colors: "#41ff00", // #a7e7ff -> [R, G, B] // 12942973
    Description:
      "**คุณได้ทำการยืนยันเป็นที่เรียบร้อย รอทางผู้ตรวจสอบข้อมูลสักครู่ ** ",
  },
  reply_admin: {
    title: "บอทกรอกข้อมูล", // ชื่อหัวข้อ
    iconURL: "https://img5.pic.in.th/file/secure-sv1/1500px.th.png", // รูปไอคอน
  },
};
