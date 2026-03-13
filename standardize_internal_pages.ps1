$baseDir = "c:\Users\Usuario\OneDrive\Desktop\pagina clonada\GOOD-CALL-TRAVEL--main"
cd $baseDir

$indexContent = Get-Content -Path "index.html" -Raw
# Extract the navbar block from <nav id="nav"> to </nav>
$regex = "(?s)<nav id=`"nav`".*?</nav>"
if ($indexContent -match $regex) {
    $navBlock = $matches[0]
}

# Modify the navBlock for internal pages
# 1. Change href="index.html" to href="../index.html"
$internalNav = $navBlock -replace 'href="index.html"', 'href="../index.html"'
# 2. Change href="pages/(.*?)" to href="$1"
$internalNav = $internalNav -replace 'href="pages/(.*?)"', 'href="$1"'

# Extract the mobile drawer block
$regexDrawer = "(?s)<div class=`"mobile-drawer`".*?</div>"
if ($indexContent -match $regexDrawer) {
    $drawerBlock = $matches[0]
}

# Modify drawerBlock
$internalDrawer = $drawerBlock -replace 'href="index.html"', 'href="../index.html"'
$internalDrawer = $internalDrawer -replace 'href="pages/(.*?)"', 'href="$1"'

$pages = @("pages/nosotros.html", "pages/blog.html", "pages/casos-exito.html", "pages/contacto.html", "pages/faq.html", "pages/precios.html", "pages/servicios.html")

foreach ($page in $pages) {
    if (Test-Path $page) {
        Write-Host "Processing $page..."
        $pageContent = Get-Content -Path $page -Raw
        # Replace navbar
        $pageContent = $pageContent -replace "(?s)<nav id=`"nav`".*?<\/nav>", $internalNav
        # Replace mobile drawer
        $pageContent = $pageContent -replace "(?s)<div class=`"mobile-drawer`".*?<\/div>", $internalDrawer
        Set-Content -Path $page -Value $pageContent -NoNewline
    } else {
        Write-Warning "File not found: $page"
    }
}
