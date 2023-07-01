while getopts ":dbs" opt; do
  case $opt in
    d)
      pnpm run dev
      ;;
    b)
      pnpm run build
      ;;
    s)
      pnpm run start
      ;;
    \?)
      echo "Does not recognize this option"
      ;;
  esac
done