import {OpenAI} from 'openai';

export default async function handler(req, res) {
  
  const  form  = req.body.userInput;

  const openai = new OpenAI(process.env.OPENAI_API_KEY);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", 
                  content: "eres un contador encargado de cotizar los precios de la medicina en base a los siguientes datos tu debes decirles el precio de los productos que piden los que estan en mayuscula es el producto en minuscula el principio activo y el valor numerico es su precio este es tu dataset : VENCLEXTA Venetoclax 143840.00 MAVYRET GlecaprevirPribrenstavir 74547.50 RIM-VOQ Upadacitinib 22612.88 SKYRIZI Risankizumab 90600.00 ZAVESCA Miglustat 173526.00 PROLIA Denosumab 9217.68 XGEVA Denosumab 10315.65 REPATHA Evolocumab 5917.50 MIMPARA Cinacalcet 5176.74 KYPROLIS Carfilzomib 24912.89 MYRBETRIC Mirabegron 2500.00 BRILINTA Ticagrelor 2403.00 BYDUREON Exenatida 3020.00 CAPRELSA Vandetanib 108696.00 EKLIRA Aclidinio 1293.00 FASLODEX Fulvestrant 20912.00 FORXIGA Dapagliflozina 1390.00 IRESSA Gefitinib 37509.00 KOMBIGLYZE XR SaxagliptinaMetformina 1535.00 LYNPARZA Olaparib 128879.00 NEXIUM Esomeprazol 670.00 NEXIUM-MUPS Esomeprazol 729.00 ONGLYZA Saxagliptina 1285.00 ZINFORO Ceftarolina fosamilio 9708.00 AVELX Moxifloxacino 795.00 AVELX I.V. Moxifloxacino 726.00 LEVITRA Vardenafil 1129.00 NEXAVAR Sorafenib 74827.00 SPECTRACEF Cefditoren 667.00 XARELTO Rivaroxaban 1475.00 AVELOX Moxifloxacino 637.00 GIOTRIF Afatinib 76399.00 JARDIANZ Empagliflozina 2135.00 JARDIANZ DUO EmpagliflozinaMetformina 2032.00 JARDIANZ DPP EmpagliflozinaLinagliptina 3166.00 OFEV Nintedanib 68732.00 PRADAXAR Dabigatrán 3082.00 PRAXBIND Idarucizumab 60920.00 SPIOLTO TriotopioOlodaterol 1933.00 STRIVERDI REPIMAT Olodaterol 774.00 TRAYENTA Linagliptina 2087.00 TRAYENTA DUO LinagliptinaMetformina 2062.00 VARGATEF Nintedanib 74314.00 EXJADE Deferasirox 20308.00 GALVUS Vildagliptina 1023.00 GALVUS MET VildagliptinaMetformina 1194.00 GLIVEC Imatinib 41026.00 JAKAVI Ruxolitinib 92500.00 LUCENTIS Ranibizumab 20563.00 ONBRIZE Indacaterol 829.00 RASILLES Aliskireno 2068.00 RASILLES HCT Aliskireno 1338.00 RASIMLOD Aliskireno 1292.00 SEEBRI Glicopirronio 838.00 SIGNIFOR Pasireotida 106375.00 TASIGNA Nilotinib 79115.00 ULTIBRO Indacaterol 1260.00 ZYKADIA Certinib 105000.00 ELICUIS Apixaban 2513.09 IBRANCE Palbociclib 86167.00 LORBRENA Lorlatinib 122253.61 PRISTIQ Desvenlafaxina 2485.40 SAYANA Medroxyprogesterone 520.19 SUTENT Sunitinib 109342.38 XALKORI Crizonitib 104706.05 ZAVICEFTA CeftazidimaAvibactam 26871.90 CIMZIA Certolizumb pegol 27062.40ARCOXIA Etoricoxib 1248.18EZETROL Ezetimiba 815.08 INVANZ IM Ertapenem 1304.24 MAXALT Rizatriptan 457.93 MAXALT RAPIDISC Rizatriptan 440.32 STROCRIN Efavirenz 5296.04 VYTORIN EzetimibaSimvastatina 1080.46 DAKLINZA Daclatasvir 111982.80 IXEMPRIA Ixabepilona 19588.15 OPDIVO Nivolumab 33730.00 REYATAZ Atazanavir 8138.87 SPRYCEL Dasatinib 81361.34 SUNVEPRA Asunaprevir 8604.00 YERVOY Ipilimumab 76844.25 LENVIXI Lenvatinib 47358.44 OLUMIANT Baricitinib 22027.50 TALTZ Ixekizumab 29457.00 TRULICITY Dulaglutida 4545.50 VERZENIO Abemaciclib 86167.00 EMGALITY Galcanezumab 5910.00 REYVOW Lasmiditan 1200.00 ARANKOR Fimasartán 512.60 ARTRIPLA EfavirenzEmtricitabinaTenofivir 16189.62 FAMPYRA Aminopiridina 17242.56 TRUVADA Tenofovir 10480.90 TYSABRI Natalizumb 54684.00 VIREAD Tenofovir 6931.62 VEMLIDY Tenofovir alafenamida 9420.27 ANORO UmeclidinioVilanterol 1603.18 AVAMYS Fluticasona 399.41 INCRUSE Umeclidinio 1235.6  RELVARE FluticasonaVilanterol 1126.16 SELZENTRY Maraviroc 18744.01 TIVICAY Dolutegravir 8006.92 TRIUMEQ AbacavirDolutegravirLamivudina 15750.00TRELEGY ELLIPTA FluticasonaUmeclidinioVilanterol 1658.59 XILIARX Vildagliptina 991.00 XILIARX DUO VildagliptinaMetformina 1182.00 PALEXIA Tapentadol 1652.00 PALEXIA RETARD Tapentadol 1652.00 APTIMETYX Cabozantinib 154738.00 DARZALEX Daratumumab 35318.54 EDURANT Rilpivirina 4384.44 IMBRUVICA Ibrutinib 157929.72 INTELENCE Etravirina 14752.73 INVOKANA Canagliflozina 1717.97 INVOKANA DUO CanagliflozinaMetformina 1717.97 PREZCOBIX DarunavirCobicistat 8594.28 SIMPONI Golimumab 26904.43 SYLVANT Siltuximab 12663.99 STELARA Ustekinumab 73349.96 ERLEADA Apalutamida 87460.80 TREMFYA Guselkumab 55806.00 ZUXTANA Bosentan 54185.07 ZEPENDO-OPSUMIT Macitentan 69911.60 UPTRAVI Selexipag 63556.00 BRINTELLIX Vortioxetina 1570.00",
    }
  ,      { role: 'user', content: form },
],
      max_tokens :1500,
      temperature: 0.9,
    });
    const mensaje = response.choices[0].message.content;
    res.status(200).json(mensaje);
console.log(mensaje)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
