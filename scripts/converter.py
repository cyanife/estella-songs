import json
import openpyxl

# 读取excel文件
wb = openpyxl.load_workbook("./songs.xlsx", data_only=True, read_only=True)
# 读取第一张表
sheet = wb.worksheets[0]
# 遍历所有非空白行，并添加到songs列表中
songs = []
for i, row in enumerate(sheet.iter_rows(min_row=2, max_col=4, values_only=True)):
    if not row[0]:
        break
    song_data = {
        "index": i + 1,
        "name": row[0],
        "artist": row[1],
        "category": row[2],
        "BVID": row[3],
    }
    songs.append(song_data)

# 将songs列表写入json文件
with open("../config/songs.json", "w") as f:
    f.write(json.dumps(songs, indent=2).encode("utf-8").decode("unicode_escape"))
