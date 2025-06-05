import { useState } from 'react'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY

export function useDestinationData() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const translations = {
    Afganistán: 'Afghanistan',
    Albania: 'Albania',
    Alemania: 'Germany',
    Andorra: 'Andorra',
    Angola: 'Angola',
    'Antigua y Barbuda': 'Antigua and Barbuda',
    'Arabia Saudita': 'Saudi Arabia',
    Argelia: 'Algeria',
    Argentina: 'Argentina',
    Armenia: 'Armenia',
    Australia: 'Australia',
    Austria: 'Austria',
    Azerbaiyán: 'Azerbaijan',
    Bahamas: 'Bahamas',
    Bangladés: 'Bangladesh',
    Barbados: 'Barbados',
    Baréin: 'Bahrain',
    Bélgica: 'Belgium',
    Belice: 'Belize',
    Benín: 'Benin',
    Bielorrusia: 'Belarus',
    Birmania: 'Myanmar',
    Bolivia: 'Bolivia',
    'Bosnia y Herzegovina': 'Bosnia and Herzegovina',
    Botsuana: 'Botswana',
    Brasil: 'Brazil',
    Brunéi: 'Brunei',
    Bulgaria: 'Bulgaria',
    'Burkina Faso': 'Burkina Faso',
    Burundi: 'Burundi',
    Bután: 'Bhutan',
    'Cabo Verde': 'Cabo Verde',
    Camboya: 'Cambodia',
    Camerún: 'Cameroon',
    Canadá: 'Canada',
    Catar: 'Qatar',
    Chad: 'Chad',
    Chile: 'Chile',
    China: 'China',
    Chipre: 'Cyprus',
    Colombia: 'Colombia',
    Comoras: 'Comoros',
    'Corea del Norte': 'North Korea',
    'Corea del Sur': 'South Korea',
    'Costa de Marfil': 'Ivory Coast',
    'Costa Rica': 'Costa Rica',
    Croacia: 'Croatia',
    Cuba: 'Cuba',
    Dinamarca: 'Denmark',
    Dominica: 'Dominica',
    Ecuador: 'Ecuador',
    Egipto: 'Egypt',
    'El Salvador': 'El Salvador',
    'Emiratos Árabes Unidos': 'United Arab Emirates',
    Eritrea: 'Eritrea',
    Eslovaquia: 'Slovakia',
    Eslovenia: 'Slovenia',
    España: 'Spain',
    'Estados Unidos': 'United States',
    Estonia: 'Estonia',
    Esuatini: 'Eswatini',
    Etiopía: 'Ethiopia',
    Filipinas: 'Philippines',
    Finlandia: 'Finland',
    Fiyi: 'Fiji',
    Francia: 'France',
    Gabón: 'Gabon',
    Gambia: 'Gambia',
    Georgia: 'Georgia',
    Ghana: 'Ghana',
    Granada: 'Grenada',
    Grecia: 'Greece',
    Guatemala: 'Guatemala',
    Guinea: 'Guinea',
    'Guinea-Bisáu': 'Guinea-Bissau',
    'Guinea Ecuatorial': 'Equatorial Guinea',
    Guyana: 'Guyana',
    Haití: 'Haiti',
    Holanda: 'Netherlands',
    Honduras: 'Honduras',
    Hungría: 'Hungary',
    India: 'India',
    Indonesia: 'Indonesia',
    Irak: 'Iraq',
    Irán: 'Iran',
    Irlanda: 'Ireland',
    Islandia: 'Iceland',
    'Islas Marshall': 'Marshall Islands',
    'Islas Salomón': 'Solomon Islands',
    Israel: 'Israel',
    Italia: 'Italy',
    Jamaica: 'Jamaica',
    Japón: 'Japan',
    Jordania: 'Jordan',
    Kazajistán: 'Kazakhstan',
    Kenia: 'Kenya',
    Kirguistán: 'Kyrgyzstan',
    Kiribati: 'Kiribati',
    Kuwait: 'Kuwait',
    Laos: 'Laos',
    Lesoto: 'Lesotho',
    Letonia: 'Latvia',
    Líbano: 'Lebanon',
    Liberia: 'Liberia',
    Libia: 'Libya',
    Liechtenstein: 'Liechtenstein',
    Lituania: 'Lithuania',
    Luxemburgo: 'Luxembourg',
    'Macedonia del Norte': 'North Macedonia',
    Madagascar: 'Madagascar',
    Malasia: 'Malaysia',
    Malaui: 'Malawi',
    Maldivas: 'Maldives',
    Malí: 'Mali',
    Malta: 'Malta',
    Marruecos: 'Morocco',
    Mauricio: 'Mauritius',
    Mauritania: 'Mauritania',
    México: 'Mexico',
    Micronesia: 'Micronesia',
    Moldavia: 'Moldova',
    Mónaco: 'Monaco',
    Mongolia: 'Mongolia',
    Montenegro: 'Montenegro',
    Mozambique: 'Mozambique',
    Namibia: 'Namibia',
    Nauru: 'Nauru',
    Nepal: 'Nepal',
    Nicaragua: 'Nicaragua',
    Níger: 'Niger',
    Nigeria: 'Nigeria',
    Noruega: 'Norway',
    'Nueva Zelanda': 'New Zealand',
    Omán: 'Oman',
    'Países Bajos': 'Netherlands',
    Pakistán: 'Pakistan',
    Palaos: 'Palau',
    Panamá: 'Panama',
    'Papúa Nueva Guinea': 'Papua New Guinea',
    Paraguay: 'Paraguay',
    Perú: 'Peru',
    Polonia: 'Poland',
    Portugal: 'Portugal',
    'Reino Unido': 'United Kingdom',
    'República Centroafricana': 'Central African Republic',
    'República Checa': 'Czech Republic',
    'República del Congo': 'Republic of the Congo',
    'República Democrática del Congo': 'Democratic Republic of the Congo',
    'República Dominicana': 'Dominican Republic',
    Ruanda: 'Rwanda',
    Rumanía: 'Romania',
    Rusia: 'Russia',
    Samoa: 'Samoa',
    'San Cristóbal y Nieves': 'Saint Kitts and Nevis',
    'San Marino': 'San Marino',
    'San Vicente y las Granadinas': 'Saint Vincent and the Grenadines',
    'Santa Lucía': 'Saint Lucia',
    'Santo Tomé y Príncipe': 'São Tomé and Príncipe',
    Senegal: 'Senegal',
    Serbia: 'Serbia',
    Seychelles: 'Seychelles',
    'Sierra Leona': 'Sierra Leone',
    Singapur: 'Singapore',
    Siria: 'Syria',
    Somalia: 'Somalia',
    'Sri Lanka': 'Sri Lanka',
    Sudáfrica: 'South Africa',
    Sudán: 'Sudan',
    'Sudán del Sur': 'South Sudan',
    Suecia: 'Sweden',
    Suiza: 'Switzerland',
    Surinam: 'Suriname',
    Tailandia: 'Thailand',
    Tanzania: 'Tanzania',
    Tayikistán: 'Tajikistan',
    'Timor Oriental': 'Timor-Leste',
    Togo: 'Togo',
    Tonga: 'Tonga',
    'Trinidad y Tobago': 'Trinidad and Tobago',
    Túnez: 'Tunisia',
    Turkmenistán: 'Turkmenistan',
    Turquía: 'Turkey',
    Tuvalu: 'Tuvalu',
    Ucrania: 'Ukraine',
    Uganda: 'Uganda',
    Uruguay: 'Uruguay',
    Uzbekistán: 'Uzbekistan',
    Vanuatu: 'Vanuatu',
    Vaticano: 'Vatican City',
    Venezuela: 'Venezuela',
    Vietnam: 'Vietnam',
    Yemen: 'Yemen',
    Yibuti: 'Djibouti',
    Zambia: 'Zambia',
    Zimbabue: 'Zimbabwe'
  }

  const fetchDestinationData = async (destination) => {
    setLoading(true)
    setError(null)

    const normalized = translations[destination.trim()] || destination.trim()

    try {
      const countryRes = await fetch(
        `https://restcountries.com/v3.1/name/${normalized}`
      )
      const countryData = await countryRes.json()

      // Validación: si no existe país o viene con mensaje de error
      if (!countryRes.ok || !Array.isArray(countryData)) {
        setError('El destino debe ser un país válido.')
        return null
      }

      const country = countryData?.[0]

      const [imageRes, weatherRes] = await Promise.all([
        fetch(
          `https://api.unsplash.com/search/photos?query=${destination}&client_id=${UNSPLASH_KEY}`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${WEATHER_KEY}&units=metric&lang=es`
        )
      ])

      const imageData = await imageRes.json()
      const weatherData = await weatherRes.json()

      const image = imageData?.results?.[0]

      return {
        translatedName: normalized,
        flag: country?.flags?.svg || '',
        region: country?.region || '',
        languages: country?.languages
          ? Object.values(country.languages).join(', ')
          : '',
        imageUrl: image?.urls?.regular || '',
        weather: {
          temp: weatherData?.main?.temp,
          description: weatherData?.weather?.[0]?.description,
          icon: weatherData?.weather?.[0]?.icon
        }
      }
    } catch (err) {
      console.error('Error al obtener datos del destino:', err)
      setError('Error al obtener datos del destino')
      return null
    } finally {
      setLoading(false)
    }
  }
  return {
    fetchDestinationData,
    loading,
    error
  }
}
