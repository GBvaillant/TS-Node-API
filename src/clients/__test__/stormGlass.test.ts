import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stromGlassWeather3HoursFixture from '@src/clients/__test__/fixtures/stormGlass_weather_3_hours.json';
import stormGlassNormalized3HoursFixture from '@src/clients/__test__/fixtures/stormglass_normalized_response_3_hours.json';
jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792226;
    const lng = 151.289824;

    axios.get = jest.fn().mockResolvedValue(stromGlassWeather3HoursFixture);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});
