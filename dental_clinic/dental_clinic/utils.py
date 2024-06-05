import requests
from settings import NESHAN_API_KEY


def get_geocode(address, api_key=NESHAN_API_KEY):
    url = "https://api.neshan.org/v4/geocoding"
    headers = {
        'Api-Key': api_key,
    }

    params = {
        'address': address
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        data = response.json()
        if 'location' in data:
            return data['location']['x'], data['location']['y']
        else:
            raise ValueError("Invalid response format from Neshan API.")
    else:
        raise ValueError(f"Error fetching data from Neshan API: {response.status_code}")
