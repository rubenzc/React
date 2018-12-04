
export function getYearDifference(year) {
    return new Date().getFullYear() - year;
 }
 
 export function checkBrand( model ) {
     let increase;
 
     switch (model) {
         case 'european':
             increase = 1.30;
             break;
         case 'american':
             increase = 1.15;
             break;
         case 'asian':
             increase = 1.05;
             break;
         default:
             break;
     }
 
     return increase;
 }
 export function getPlan( plan ) {
     return (plan === 'basic') ? 1.20 : 1.50;
 }
 export function primeraMayuscula(text) {
     return text.charAt(0).toUpperCase() + text.slice(1);
 }