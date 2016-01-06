import Adafruit_DHT
import sys

pin = 4
sensor = Adafruit_DHT.DHT22

num_humidity, num_temperature = Adafruit_DHT.read_retry(sensor, pin)
txt_temperature = str(num_temperature)
txt_humidity = str(num_humidity)

f = open('/home/pi/dht/temp.txt', 'w')
e = open('/home/pi/dht/hum.txt', 'w')
e.write(txt_humidity)
e.close()
f.write(txt_temperature)
f.close()

sys.exit()
