param (
    [string]$url
)

try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host "Site is up!"
        exit 0
    } else {
        Write-Host "Site is down! Status code: $($response.StatusCode)"
        exit 1
    }
} catch {
    Write-Host "Erreur lors de la requête HTTP : $_"
    exit 1
}
