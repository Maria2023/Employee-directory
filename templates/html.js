function html(cards) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <title>My Team Report</title>
            <style>
                .card {
                    min-width: 275px;
                }
            </style>
        </head>
        <body>
            <header>
                <nav class="navbar navbar-dark bg-dark row d-flex justify-content-center">
                    <h1 class="page_header text-white text-center">My Team</h1>
                </nav>
            </header>
            <main class="d-flex justify-content-around flex-wrap p-4">
                ${cards}
            </main>
        </body>
    </html>
`
}

module.exports.html = html;