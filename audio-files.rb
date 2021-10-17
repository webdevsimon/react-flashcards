require 'byebug'
require 'json'

count = 0

han_words = []
pinyin_words = []
json_words = []

File.open('./sagebooks/set1.txt', 'r').each_line do |line|
  if count.even?

    han_words = line.split(' ')
    han_words.each do |han|
      # aiff_filepath = "public/audio/aiff/set1/#{han}.aiff"
      # `say -v Sin-ji #{han} -o aiff_filepath`
      # `ffmpeg -i aiff_filepath -f mp3 -acodec libmp3lame -ab 192000 -ar 44100 track1.mp3`
    end
  end
  if count.odd?
    pinyin_words = line.split(' ')
    json_words += han_words.zip(pinyin_words)
    pinyin_words.each do |pinyin|
      pinyin.split('/').each do |pinyin_each|
        # `curl https://www.edbchinese.hk/EmbziciwebRes/jyutping/#{pinyin}.mp3 --output public/audio/mp3/set1/#{pinyin_each}.mp3`
      end
    end
  end

  count += 1
end

# generate JSON
File.open("public/data/set1.json","w") do |f|
  f.write(json_words.map { |han, pin| {han: han, pin: pin}  }.to_json)
end

