//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

// (N1 Davaleba)
// const calculateYearsToRetirement = (currentAge, retirementAge) =>{
//     const yearsToRetirement = Math.max(0, retirementAge - currentAge);
//     return yearsToRetirement;
// };
// const userCurrentAge = parseInt(prompt("ჩაწერეთ თქვენი ასაკი:"));
// const userRetirementAge = parseInt(prompt("რამდენი წლის უნდა იყოთ, რომ აიღოთ პენსია:"));

// const remainingYears = calculateYearsToRetirement(userCurrentAge, userRetirementAge);
// console.log(`თქვენ დაგრჩათ ${remainingYears} წელი პენსიამდე`);

//(N2 Davaleba)
// function calculator(num1,num2,symbol){
//     if(symbol==="+"){
//         console.log(num1+num2);
//     }else if(symbol==="-"){
//         console.log(num1-num2);
//     }else if(symbol==="*"){
//         console.log(num1*num2);
//     }else{
//         console.log(num1/num2);
//     }
// };
// calculator(5,6,"/");

//(N3 Davaleba)
// function checkPasswordStrength(password) {
//     if (password.length===0) {
//         console.log("პაროლი არუნდა იყოს ცარიელი")
//     }else if(password.length<8){
//         console.log("პაროლი არუნდა იყოს 8 სიმბოლოზე ნაკლები")
//     }else if(password.length>16){
//         console.log("პაროლი არუნდა აღემატებოდეს 16 სიმბოლოს")
//     }else{
//         console.log("პაროლი საკმარისად ძლიერია")
//     }
// };
// checkPasswordStrength("password");

// (N4 Davaleba)
// function filterFlowers(flowers) {
//     switch (flowers) {
//         case "rose":
//             console.log("ეს ყვავილი ნაპოვნია!!");
//             break;
//         case "tulip":
//             console.log("ეს ყვავილი ნაპოვნია!!")
//             break;
//         case "violet":
//             console.log("ეს ყვავილი ნაპოვნია!!")
//             break;
//         default:
//             console.log("ასეთი ყვავილი ვერ მოიძებნა!!!")
//             break;
//     }
// };
// filterFlowers("violet");

// (N5 Davaleba)
function validateBigestNUm(num1,num2,num3) {
    if (isNaN(num1)||isNaN(num2)||isNaN(num3)) {
        return "!!!error::აქ რასაც ჩაწერთ უნდა იყოს რიცხვი!!!";
    };
    if(num1>=num2 && num1>=num3){
        return `უდიდესი რიცხვია : ${num1}`;
    }else if(num2>=num1 && num2>=num3){
        return `უდიდესი რიცხვია : ${num2}`;
    }else{
       return `უდიდესი რიცხვია : ${num3}`;
    }
};
const num1 = parseInt(prompt("ჩაწერეთ რაიმე რიცხვი"));
const num2 = parseInt(prompt("ჩაწერეთ რაიმე რიცხვი"));
const num3 = parseInt(prompt("ჩაწერეთ რაიმე რიცხვი"));
console.log(validateBigestNUm(num1, num2, num3));