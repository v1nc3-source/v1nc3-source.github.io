<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.9.0/bootstrap-table.min.css'>

</head>    
<body>


<?php
set_time_limit(4000);

// Connect to gmail
$imapPath = '{imap.gmail.com:993/imap/ssl}INBOX';
$username = 'test@gmail.com';
$password = 'test@123';   

// search and get unseen emails, function will return email ids
$emails = imap_search($inbox,'UNSEEN');

$output = '';

foreach($emails as $mail) {

    $headerInfo = imap_headerinfo($inbox,$mail);

    $output .= $headerInfo->subject.'<br/>';
    $output .= $headerInfo->toaddress.'<br/>';
    $output .= $headerInfo->date.'<br/>';
    $output .= $headerInfo->fromaddress.'<br/>';
    $output .= $headerInfo->reply_toaddress.'<br/>';

    $emailStructure = imap_fetchstructure($inbox,$mail);

    if(!isset($emailStructure->parts)) {
        $output .= imap_body($inbox, $mail, FT_PEEK);
    } else {
        //
    }
    echo $output;
    $output = '';
}

// colse the connection
imap_expunge($inbox);
imap_close($inbox); 
?>

<table width="100%">
    <thead>
        <tr>
            <th>Subject</th>
            <th>From</th>
            <th>Date</th>
            <th>Message</th>
    
        </tr>
    </thead>

    <tfoot>
        <tr>
           <th>Subject</th>
            <th>From</th>
            <th>Date</th>
            <th>Message</th>
        </tr>
    </tfoot>

    <tbody>
       <tr>
            <td>Test</td>
            <td>test@gmail.com</td>
            <td>today</td>
            <td>hello</td>

        </tr>
    </tbody>
</table>
