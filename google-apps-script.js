// =====================================================
// GOOGLE APPS SCRIPT - Cole este código no Apps Script
// =====================================================
// 
// INSTRUÇÕES:
// 1. Abra a planilha: https://docs.google.com/spreadsheets/d/1quOwhQEqT4kthdxPTZ0aHH9XRNhfquuJrBOcS6-QgZk/
// 2. Vá em Extensões > Apps Script
// 3. Apague todo o código existente e cole este
// 4. Clique em "Implantar" > "Nova implantação"
// 5. Tipo: "App da Web"
// 6. Executar como: "Eu"
// 7. Quem pode acessar: "Qualquer pessoa"
// 8. Clique em "Implantar"
// 9. Copie a URL gerada e adicione no arquivo .env do projeto
//
// =====================================================

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads-GP");

        if (!sheet) {
            return ContentService.createTextOutput(JSON.stringify({
                success: false,
                error: "Sheet 'Leads-GP' not found"
            })).setMimeType(ContentService.MimeType.JSON);
        }

        const data = JSON.parse(e.postData.contents);

        // Get current date and time in Brazil timezone
        const now = new Date();
        const brazilTime = Utilities.formatDate(now, "America/Sao_Paulo", "dd/MM/yyyy");
        const brazilHour = Utilities.formatDate(now, "America/Sao_Paulo", "HH:mm");

        // Format phone: remove special chars, add 55 prefix
        let phone = data.whatsapp.replace(/\D/g, ''); // Remove non-digits
        if (!phone.startsWith('55')) {
            phone = '55' + phone;
        }

        // Append row with data
        // Columns: A=Data, B=Hora, C=Nome, D=Celular, E=Instagram, F=Fazenda, G=Estado, H=Cidade, I=Interesse, J=BuscaComprar, K=QtdAnimais
        sheet.appendRow([
            brazilTime,              // A - Data
            brazilHour,              // B - Hora
            data.nome,               // C - Nome
            phone,                   // D - Celular (formatted)
            data.instagram,          // E - Instagram
            data.nomeFazenda,        // F - Nome da Fazenda
            data.estado,             // G - Estado
            data.cidade,             // H - Cidade
            data.interesse,          // I - Interesse
            data.buscaComprar,       // J - O que busca comprar
            data.quantidadeAnimais   // K - Quantidade de animais
        ]);

        return ContentService.createTextOutput(JSON.stringify({
            success: true,
            message: "Lead saved successfully"
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

// Handle CORS preflight
function doGet(e) {
    return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "API is running"
    })).setMimeType(ContentService.MimeType.JSON);
}
