import pymongo
import random
from pydub import AudioSegment
from pydub.playback import play
import io

upperrangeseq = 2
lowerrangeseq = 5

client = pymongo.MongoClient("mongodb://localhost:27017/")

#The database
database = client["newhacks"]

#The collection of sounds 
collection = database["sounds"]

#The function to send the mp3 file to the mongoDB
def store_mp3(file_path, numid, value):
    #Open file given in file path and read the mp3 data as text
    with open(file_path, 'rb') as file:
        mp3_data = file.read()  
    #The document data
    document = {
        "sound": (file_path.split('\\')[1]).split('.')[0],
        "data": mp3_data,  
        "numid": numid,  
        "value": value  
    }

    result = collection.insert_one(document)



def retrieve_mp3(numid, output_path):
    # Find the document by its ID
    document = collection.find_one({"numid": numid})

    if document and 'data' in document:
        # Write back the data into a mp3 file in given output path
        with open(output_path, 'wb') as file:
            file.write(document['data'])


lengthofsequence = random.randint(lowerrangeseq,upperrangeseq)

amountofdata = collection.count_documents({})

idofseq = []
wrongidseq1 = []
wrongidseq2 = []
wrongidseq3 = []
for x in range(lengthofsequence):
    idofseq.append(random.randint(0,amountofdata))
    wrongidseq1.append(random.randint(0,amountofdata))
    wrongidseq2.append(random.randint(0,amountofdata))
    wrongidseq3.append(random.randint(0,amountofdata))

for x in idofseq:
    retrieve_mp3(collection.find_one({"numid":x}),f"correctsounds/{collection.find_one({'numid':x})['sound']}{x}.mp3")

for x in wrongidseq1:
    retrieve_mp3(collection.find_one({"numid":x}),f"incorrectsounds1/{collection.find_one({'numid':x})['sound']}{x}.mp3")

for x in wrongidseq2:
    retrieve_mp3(collection.find_one({"numid":x}),f"incorrectsounds2/{collection.find_one({'numid':x})['sound']}{x}.mp3")

for x in wrongidseq3:
    retrieve_mp3(collection.find_one({"numid":x}),f"incorrectsounds3/{collection.find_one({'numid':x})['sound']}{x}.mp3")