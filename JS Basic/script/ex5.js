/**
 *   todo : Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one
 *   todo : letter from the string end and attaching it to the front.
 */
// function animate_string(id) {
//     var element = document.getElementById(id);
//     var textNode = element.childNodes[0]; // assuming no other children
//     var text = textNode.data;

//     setInterval(function () {
//         text = text[text.length - 1] + text.substring(0, text.length - 1);
//         textNode.data = text;
//     }, 1000);
// }
const btn = document.querySelector(".btn");
console.log(btn.data);
btn.addEventListener("click", function () {
    const element = document.querySelector("#target");
    const textNode = element.childNodes[0];
    // ! textNode.data tương ứng với 1 đoạn chuỗi
    // ! Thuộc tính .data được lấy từ một đối tượng Node trong DOM (Document Object Model).
    // ! Trong trường hợp của đoạn mã JavaScript bạn đưa ra, bạn đã truy cập vào
    // ! một phần tử có id là "target" bằng cách sử dụng
    let text = textNode.data;
    console.log(text);

    setInterval(() => {
        // todo : text[text.length - 1] vị trí cuối cùng của 1 chuỗi
        //todo : text.substring(0, text.length - 1) Đoạn này lấy một phần của chuỗi text,
        //todo : bắt đầu từ vị trí 0 (ký tự đầu tiên) và kết thúc ở vị trí text.length - 1,
        //todo : nghĩa là chuỗi text ban đầu trừ đi ký tự cuối cùng.
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
});
