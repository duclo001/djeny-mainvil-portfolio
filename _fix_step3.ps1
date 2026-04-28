$file = "c:\Users\wildg\OneDrive\Desktop\DJENY_WEB\professional.html"

$rawBytes = [System.IO.File]::ReadAllBytes($file)
$hasBom = ($rawBytes.Length -ge 3 -and $rawBytes[0] -eq 0xEF -and $rawBytes[1] -eq 0xBB -and $rawBytes[2] -eq 0xBF)
if ($hasBom) { $enc = New-Object System.Text.UTF8Encoding $true }
else { $enc = New-Object System.Text.UTF8Encoding $false }

$content = [System.IO.File]::ReadAllText($file, $enc)
$sq = [char]0x2019
$ea = [char]0x00E9
$EA = [char]0x00C9
$crlf = "`r`n"

# Build anchor without literal accented chars (PS 5.1 codepage issue)
$anchor = "orient" + $ea + "e r" + $ea + "sultat.</p>"
$ai = $content.IndexOf($anchor)
Write-Output "Anchor search result: $ai"

if ($ai -ge 0) {
    $insertIdx = $ai + $anchor.Length
    $lines = @(
        ('            <h3 class="section-subtitle">J' + $sq + 'accompagne principalement :</h3>'),
        '            <ul class="topics-list">',
        '              <li>Startups en phase de structuration</li>',
        '              <li>PME en croissance</li>',
        ('              <li>Dirigeants souhaitant une vision consolid' + $ea + 'e de leur performance</li>'),
        ('              <li>' + $EA + 'quipes ayant besoin d' + $sq + 'un cadre analytique clair</li>'),
        '            </ul>'
    )
    $block = $crlf + ($lines -join $crlf)
    $content = $content.Substring(0, $insertIdx) + $block + $content.Substring($insertIdx)
    Write-Output "Pour-Qui content inserted at char $insertIdx"
} else {
    Write-Output "FAIL: anchor not found"
    exit 1
}

[System.IO.File]::WriteAllText($file, $content, $enc)
Write-Output "File written successfully"
