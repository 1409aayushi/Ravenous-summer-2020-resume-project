const getSleepHours = day => {
    switch (day){
     case 'monday':
     return 8;
     break;
     case 'tuesday':
     return 6;
     break;
     case 'wednesday':
     return 5;
     break;
     case 'thursday':
     return 7;
     break;
     case 'friday':
     return 8;
     break;
     case 'saturday':
     return 5;
     break;
     case 'sunday':
     return 6;
     break;
    };
    };
    const getActualSleepHours = () =>{
    return 6+7+5+8+5+7+6;
    };
    const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours*7 ;
    };
    const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log('You have perfect amount of sleep!');
    }
    else if(actualSleepHours > idealSleepHours){
      console.log('You sleep more than '+(acutalSleepHours-idealSleepHours) + ' hours needed!');
    }
    else if(actualSleepHours < idealSleepHours){
      console.log('You need more ' + (idealSleepHours-actualSleepHours) + ' hours of sleep!');
    }
    };
    calculateSleepDebt();