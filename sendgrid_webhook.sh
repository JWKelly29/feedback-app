function localtunnel {
  sudo lt -s "mpq0ox12nn3cby4briu828475yus" --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
