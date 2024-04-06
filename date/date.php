<?php function monthTranslate($month) {
	switch ($month) {
		case 1: 
		$newName = '01';
		break;
		case 2:
		$newName = '02';
		break;
		case 3:
		$newName = '03';
		break;
		case 4:
		$newName = '04';
		break;
		case 5:
		$newName = '05';
		break;
		case 6:
		$newName = '06';
		break;
		case 7:
		$newName = '07';
		break;
		case 8:
		$newName = '08';
		break;
		case 9:
		$newName = '09';
		break;
		case 10:
		$newName = '10';
		break;
		case 11:
		$newName = '11';
		break;
		case 12:
		$newName = '12';
		break;
	}
	
	return $newName;
}

date_default_timezone_set('Europe/Moscow');

$currentDate = new DateTime("now");

// Если время меньше 2 ночи, старт берем со вчера
if ( $currentDate->format('H') > 0 ) :
$currentDate->modify('+1 day');

endif;

$dateDay1Text = $currentDate->format('d');

// Добавляем + 4 дня с момента старта
$currentDate->modify('+4 day');

$currentYear = $currentDate->format('y');

$dateDay2Text = $currentDate->format('d');

$dateMonthText = monthTranslate( $currentDate->format('n') );
$dateMonthText2 = monthTranslate( $currentDate->format('n')-1 );
if (($dateDay2Text >= 1) && ($dateDay2Text < 3)) {
	$dateMonthTextP = $dateMonthText2;
}
else {
	$dateMonthTextP = $dateMonthText;
}
?>